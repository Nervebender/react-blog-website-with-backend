import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = ({ _id, title, content, thumbnail }) => {
  return (
    <div className="blog-post">
      <img src={thumbnail} width="600" alt="thumbnail"/>
      <h2>{title}</h2>
      <p>{content}</p>
      <li key={_id}>
      <Link class="readmore" to={`/posts/${_id}`}>Read More!</Link>
      </li>
    </div>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from your backend API
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className ="post-list">
    <h1>Latest blog posts</h1>
        {posts.map(post => (
            <Post key={post._id} {...post} />
        ))}
    </div>
  );
};

export default Blog;
