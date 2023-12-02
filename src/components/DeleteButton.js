import React from 'react';

const DeleteButton = ({postId, onDelete}) => { // defines delete button that when clicked, will handle the deletion of a post
    const handleDelete = async () => {
        try{
            fetch('http://localhost:4000/api/delete/', {
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
            onDelete(postId);
        } catch(error){
            console.error('Error deleting post:', error);
        }
    };

    return(
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteButton;