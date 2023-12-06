import React from 'react';
import './DeleteButton.css';


const DeleteButton = ({ imageId }) => 
{ 
    const handleDelete = async () =>
    {
        try
        {
            const response = await fetch('http://localhost:4000/api/posts', {// fetch request to delete.js in the backend
                method: 'DELETE', // specifying this as a DELETE request
                headers:
                {
                    'Authorization': `Bearer ${"DEL"+imageId}`,
                    'Content-Type': 'application/json', // telling the backend that the content of the request is in JSON format
                }
            },
            )

            if(response.ok) // if the request was successsful
            {
                const data = await response.json();
                console.log(data.message);
                window.location.href='';
            }
            else
            {
                console.error('Delete request failed:', response);
            }
        } 
        catch(error)
        {
            console.error('Error deleting post:', error);
        }
    };
    return(
        <div className="img-con">
            <div onClick={handleDelete} className='delButton'>x</div> 
        </div>
    );
};

export default DeleteButton // allows other parts of the project to use this component by saying "import DeleteButton"
