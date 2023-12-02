import React from 'react';

const DeleteButton = ({postId, onDelete}) => { // defines delete button that when clicked, will handle the deletion of a post
    const handleDelete = async () => {
        try{
            await fetch('/api/posts/${postId}', {
                method: 'DELETE',
            });
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