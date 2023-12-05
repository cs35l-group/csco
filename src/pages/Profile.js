import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/photogallery';
import './Profile.css'
import React from 'react';
import SignOut from '../components/signoutbutton';
import FileUpload from '../components/FileUpload'; 
import Header from '../components/header';

/* image Processing */
import ImageColorExtractor from '../components/ImageColorExtractor'

function Profile() {
    let navigate = useNavigate();
    
    /* For loading existing user information */
    const [userData, setUserData] = useState(null);
    const [images, setImages] = useState([]);
    const [caption, setCaption] = useState(null);

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
            formData.append("caption", caption ? caption : null);
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
                    setCaption(null);
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
                    caption: caption ? caption : null,
                    created_at: Date.now(),
                }),
            })
            .then(async response => {
                const data = await response.json();
                if (response.ok) {
                    setnewImageUrl(null);
                    setCaption(null);
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
        <>
        <div className="header">
            <Header />
        </div>
        <div className="profile" onPaste={handlePaste}
            style={{ background: "linear-gradient(0deg, rgba(18,18,18,1) 80%, " + domColor + " 100%)" }}
        >
                <h1>@{userData.username}</h1>
                <br></br>
                {newImageUrl == null ?
                    <FileUpload handleUploads={uploadimages} />
                    :
                    // show this if image is staged for upload:
                    <>
                        <ImageColorExtractor imageUrl={newImageUrl} setDomColor={(color) => { setDomColor(color); } } />
                        <div className="img-con">
                            <div className="removeBtn" onClick={() => { setnewImageUrl(null); setDomColor('black'); } }>x</div>
                            <img className="newImage" src={newImageUrl}></img>
                        </div>
                        <textarea className="caption-edit" placeholder="Write something about this memory" onChange={(e) => { setCaption(e.target.value); } }></textarea>
                        <button className="Post" onClick={handlePost}>Post Image</button>
                    </>}
                <div className="photos">
                    <PhotoGallery images={images} />
                </div>
                {/*         <div className="navigation">
                    <button className="navigate" onClick={handleHome}>Home</button>
                    <SignOut />
                </div> */}


            </div></>
    );
}

export default Profile;