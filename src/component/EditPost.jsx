import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const EditPost = () => {
  const { posts, editPost } = useContext(BlogContext);
  const { id } = useParams();
  const post = posts.find(post => post.id === id);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { ...post, title, description };
    editPost(updatedPost);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditPost;
