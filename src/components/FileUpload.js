import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './FileUpload.css';

const FileUpload = () => {
  const [selectedOption, setSelectedOption] = useState(null); // 'url' or 'upload'
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      setSelectedOption('upload');
      setImageUrl(''); // Reset the URL when uploading files
    },
  });

  const handlePost = async (event) => {
    event.preventDefault();
    
    const token = localStorage.getItem("token");

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append('images', file);
    });

    // Include either URL or files based on the selected option
    if (selectedOption === 'url') {
      formData.append('imageUrl', imageUrl);
    }

    try {
      const response = await fetch('http://localhost:4000/api/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Posted!", data);
        // Reset the state after successful upload
        setUploadedFiles([]);
        setImageUrl('');
        setSelectedOption(null);
      } else {
        alert("Error posting");
      }
    } catch (error) {
      console.error('Error posting:', error);
    }
  };

  return (
    <div className="upload-container">
      <div>
        <label>
          <input
            type="radio"
            value="url"
            checked={selectedOption === 'url'}
            onChange={() => setSelectedOption('url')}
          />
          Upload from URL
        </label>
        <label>
          <input
            type="radio"
            value="upload"
            checked={selectedOption === 'upload'}
            onChange={() => setSelectedOption('upload')}
          />
          Upload from your device
        </label>
      </div>
      {selectedOption === 'upload' && (
        <div {...getRootProps()} className="upload-dropzone">
          <input {...getInputProps()} />
          <p>Drag and drop your image here</p>
        </div>
      )}
      {selectedOption === 'url' && (
        <div className="url-input">
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL..."
          />
        </div>
      )}
      {selectedOption === 'upload' || selectedOption === 'url' ? (
        <div className="uploaded-files">
          <h3>Uploaded Files</h3>
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <button className="upload-button" onClick={handlePost}> Create Post </button>
    </div>
  );
};

export default FileUpload;
