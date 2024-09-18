import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BlogContext } from '../context/BlogContext';

const AddPost = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      title,
      description,
      name,
      image,
      avatar,
      name,
      date: new Date().toLocaleDateString(),
      image: 'default-image.jpg',
      author: 'John Doe',
      avatar: 'default-avatar.jpg' 
    };
    addPost(newPost);
    navigate('/');
  };

  return (
    <>
        
    <form onSubmit={handleSubmit} className='p-5 rounded bg-white'>
    <h3 className='text-dark'>Add Post</h3>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> 
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Content" required />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="text" placeholder="Avatar URL" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" className='w-100 btn btn-primary'>Add Post</button>
    </form>
    </>
  );
};

export default AddPost;
