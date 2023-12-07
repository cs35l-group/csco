import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/photogallery';
import './Profile.css'
import React from 'react';
import SignOut from '../components/signoutbutton';
import Header from '../components/header'


function OtherProfile() {
    let navigate = useNavigate();
    
    const [userData, setUserData] = useState(null);
    const [images, setImages] = useState([]);
    const [post, setPost] = useState([null]);

    const handleHome = (event) => {
        event.preventDefault();
        navigate('/home')
    }

    const fetchUserProfile = async () => {
        const token = localStorage.getItem('otherToken');
        
        if(!token) {
            console.log("NO TOKEN")
            navigate('/home')
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
          navigate('/home')
        }
    };

    const fetchImages = async () => {
        const token = localStorage.getItem('otherToken');
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
            data.posts.map((element) => {
                var obj = {
                    url: element.imageUrl,
                    caption: element.caption ? element.caption : null,
                    vibes: element.vibes ? element.vibes : null
                };
                newArr.push(obj);
            });
            setImages(newArr.reverse());
        } else {
            navigate('/home')
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
        <>
            <div className="header">
                <Header />
            </div>
            <div className="profile">
                <h1>@{userData.username}</h1>
                <div className="photos">
                    <PhotoGallery images={images} />
                </div>
            </div>
        </>
    );
}

export default OtherProfile;