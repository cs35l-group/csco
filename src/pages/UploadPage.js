import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './UploadPage.css';
import Header from '../components/header';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  return (
    <>
    <div>
      <Header />
    </div>
    <div className="upload-container">
        <div className="upload-header">
          <h2>Create a Post</h2>
        </div>
        <div {...getRootProps()} className="upload-dropzone">
          <input {...getInputProps()} />
          <p>Drag and drop your image here</p>
        </div>
        <div className="uploaded-files">
          <h3>Uploaded Files</h3>
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
        <div className="upload-actions">
          <button className="upload-button">Create Post</button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
