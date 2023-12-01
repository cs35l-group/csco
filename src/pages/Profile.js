import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/photogallery';
import './Profile.css'
import React from 'react';
import SignOut from '../components/signoutbutton';
import FileUpload from '../components/FileUpload'; 

/* image Processing */
import ImageColorExtractor from '../components/ImageColorExtractor'

function Profile() {
    let navigate = useNavigate();
    
    /* For loading existing user information */
    const [userData, setUserData] = useState(null);
    const [images, setImages] = useState([]);
    const [post, setPost] = useState(null);

    /* For new image upload */
    const [newImageObj, setNewImgObj] = useState(null);
    const [newImageUrl, setnewImageUrl] = useState(null); // holds the src of new image
    const [domColor, setDomColor] = useState('black');

    useEffect(() => {
        fetchUserProfile();
        fetchImages();
    }, []); 

    const handleHome = (event) => {
        event.preventDefault();
        navigate('/home');
    }

    const handlePost = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");

        if (newImageUrl.includes('blob')){ // this is a locally uploaded file
            const formData = new FormData();
            formData.append("image", newImageObj);
            fetch('http://localhost:4000/api/image', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            }).then(async response => {
            const data = await response.json();
                if (response.ok) {
                    console.log("Posted: ", data)
                    setnewImageUrl(null);
                    fetchImages();
                    setDomColor("black");
                    return;
                } else {
                    alert("Invalid URL")
                    console.log(response);
                }
            })
            .catch(err => console.error('Error posting:', err));
            return;
        }
        else if (newImageUrl.includes('https://')) {
            fetch('http://localhost:4000/api/posts', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post: newImageUrl,
                    caption: "New Uploaded Image",
                    created_at: Date.now(),
                }),
            })
            .then(async response => {
                const data = await response.json();
                if (response.ok) {
                    setnewImageUrl(null);
                    fetchImages();
                    setDomColor("black");
                    return;
                } else {
                    alert("Invalid URL")
                    console.log(response);
                }
            })
            .catch(err => console.error('Error posting:', err));
        }

        fetchImages()
    }

    const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        
        if(!token) {
            console.log("NO TOKEN")
            navigate('/')
        }

        const response = await fetch('http://localhost:4000/api/user-page', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
          setUserData(data);
        } else {
          navigate('/')
        }
    };

    const fetchImages = async () => {
        const token = localStorage.getItem('token');
        if(!token) {
            console.log("NO TOKEN")
            navigate('/')
        }
        const response = await fetch('http://localhost:4000/api/posts', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
            const newArr = [];
            let imgArr = data.posts.map((element) => {
                var url = element.imageUrl;
                if (!url.includes('http')){
                    newArr.push('http://localhost:4000/' + url);
                } else {
                    newArr.push(url);
                }
            }).reverse()
            setImages(newArr.reverse());
        } else {
            navigate('/')
        }
    }

    const uploadimages = (imageFiles) => {
        setNewImgObj(imageFiles[0]);
        const url = URL.createObjectURL(imageFiles[0]) // create URL object from image
        setnewImageUrl(url);
    }

    const handlePaste = (e) => {
        var pastedData;
        e.stopPropagation();
        e.preventDefault();
        pastedData = (e.clipboardData || window.clipboardData).getData('Text');
        setnewImageUrl(pastedData);
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile" onPaste={handlePaste} 
            style={{background: "linear-gradient(0deg, rgba(18,18,18,1) 40%, " + domColor + " 100%)"}}
        >
            <h1>@{userData.username}</h1>
            <br></br>
            { newImageUrl == null ? 
            <FileUpload handleUploads={uploadimages} /> 
            : 
            // show this if image is staged for upload:
            <>
                <ImageColorExtractor imageUrl={newImageUrl} setDomColor={(color)=>{setDomColor(color)}} />
                <div className="img-con">
                    <div className="removeBtn" onClick={()=>{setnewImageUrl(null);setDomColor('black')}}>x</div>
                    <img className="newImage" src={newImageUrl}></img>
                </div>
                <button className="Post" onClick={handlePost}>Post Image</button>
            </>
            }
            <div className="photos">
                <PhotoGallery images={images} />
            </div>
<<<<<<< HEAD

            <form>
                <input
                type="text"
                value={post}
                onChange={e => setPost(e.target.value)}
                placeholder="Image URL"
                />
                <button className="Post" onClick={handlePost}>Post Image</button>
                <div className="navigation">
                    <button className="navigate" onClick={handleHome}>Home</button>
                    <SignOut />
                </div>    
            </form>      
=======
{/*         <div className="navigation">
                <button className="navigate" onClick={handleHome}>Home</button>
                <SignOut />
            </div> */}                   
>>>>>>> upload-page-sharlene
        </div>
    );
}

export default Profile;