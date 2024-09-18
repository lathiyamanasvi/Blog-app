import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Post from './component/Post';
import AddPost from './component/Addpost';
import PostDetails from './component/PostDetails';
import EditPost from './component/EditPost';

function App() {
  return (
    <BlogProvider>
    <BrowserRouter>
      <Routes>
        <Route
         path="/" element={<Post />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  </BlogProvider>
  );
}

export default App;
