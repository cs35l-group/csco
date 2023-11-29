import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/photogallery';
import './Profile.css'
import React from 'react';
import SignOut from '../components/signoutbutton';
import FileUpload from '../components/FileUpload'; 


function Profile() {
    let navigate = useNavigate();
    
    const [userData, setUserData] = useState(null);
    const [images, setImages] = useState([]);
    const [post, setPost] = useState([null]);

    const handleHome = (event) => {
        event.preventDefault();
        navigate('/home')
    }

    const handlePost = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token")
        fetch('http://localhost:4000/api/posts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
        },
            body: JSON.stringify({ post }),
        })
        .then(async response => {
            const data = await response.json();
            if (response.ok) {
                console.log("Posted! ", data)
                return;
            } else {
                alert("Invalid URL")
            }
        })
        .catch(err => console.error('Error posting:', err));

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
            let imgArr = data.posts.map((element) => element.imageUrl).reverse()
            setImages(imgArr);
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        fetchUserProfile();
        fetchImages();
    }, []); 

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile">
            <h1>@{userData.username}</h1>
            <div className="photos">
                <PhotoGallery images={images} />

            </div>

            <form>
                <input
                type="text"
                value={post}
                onChange={e => setPost(e.target.value)}
                placeholder="Image URL"
                />
                
                <div>
                    <FileUpload /> 
                </div>

                <button className="Post" onClick={handlePost}>Post Image</button>
                
                <div className="navigation">
                    <button className="navigate" onClick={handleHome}>Home</button>
                    <SignOut />
                </div>    
            </form>  
                   
        </div>
    );
}

export default Profile;