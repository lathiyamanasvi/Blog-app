import React, { createContext, useState, useEffect } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Load posts from local storage when the app starts
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  // Save posts to local storage whenever the posts state changes
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Add a new post
  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  // Edit a post
  const editPost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  // Delete a post
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, editPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
