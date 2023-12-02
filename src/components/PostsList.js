import React, {useState, useEffect} from 'react';

import Post from './Post';
import DeleteButton from './DeleteButton';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

    }, []);

    const handleDelete = (postId) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    };

    return(
        <div>
            {posts.map((post) => (
                <div key={post._id}>
                    <Post post={post}/>
                    <DeleteButton postId={post._id} onDelete={handleDelete} />
                </div>
            ))}
        </div>
    );
};

export default PostsList;
