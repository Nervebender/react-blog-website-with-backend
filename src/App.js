import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import Banner from './Banner';
import Footer from './Footer';
import BlogPostPage from './BlogPostPage';
import About from './About';

const Home = () => (
  <div>
    <Blog />
  </div>
);

const Contact = () => (
  <div>
  <About />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
      <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/posts/:postId" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
