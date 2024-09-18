import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Post = () => {
    const { posts, deletePost } = useContext(BlogContext);

    return (
        <>
            <div className='text-center py-5'>
                <div>
                    <h6 className="bg-white d-inline px-2 rounded-pill py-1 fw-bold" style={{ color: "#000000" }}>Our blog</h6>
                </div>
                <h2 className='text-white py-3' style={{ fontSize: "60px" }}>Resources and insights</h2>
                <p style={{ color: "#fff", fontSize: "20px" }} className='pb-4 shadow'>The latest industry news,interviews,technologies and resource</p>

                <Link className='text-white' to={'/add-post'}><button class="addbtn">Add post</button></Link>
            </div>
            <div className="container">
                {posts.map(post => (

                    <div className="wrapper">
                        <div className="card">
                            <div className="card-header">
                                <img src={post?.image} />
                            </div>
                            <div className="card-body">
                                <span className="tag">{post?.name}</span>
                                <h5 className='d-flex justify-content-between align-items-center pb-3'>
                                    {post?.title}
                                    <Link to={`/post/${post.id}`}>
                                        <MdOutlineArrowOutward className='fs-3 text-white fw-lighter' />
                                    </Link>
                                </h5>
                                <p className='text-white'>{post?.description}</p>
                                <div className='d-flex justify-content-between w-100'>

                                    <Link to={`/edit-post/${post?.id}`}><button className='editbtn py-2'>Edit</button></Link>

                                    <button onClick={() => deletePost(post.id)} className='deletebtn'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Post;
