import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const PostDetails = () => {
    const { posts } = useContext(BlogContext);
    const { id } = useParams();
    const post = posts.find(post => post.id === id);

    return (
        <>
            <h2 className='text-center text-white py-3'>Post-Details</h2>
            <div className="w-50 m-auto bg-white p-5">
                <div style={{ backgroundColor: "#728FCE" }} className='text-center'>
                    <h2>{post?.name}</h2>
                </div>
                <div className='d-flex justiy-content-between'>
                    <div style={{ width: "40%" }}>
                        <img src={post?.image} alt="Post" />
                    </div>
                    <div>
                        <h2>{post?.title}</h2>
                        <p>{post?.description}</p>
                        <p><small>{post?.date}</small></p>
                        <p>Author: {post?.author}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetails;
