import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log('postId:', postId);
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/posts/${postId}`);
        const postData = await response.json();
        console.log('Fetched post data:', postData); // Log the fetched data
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  if (!post.title || !post.content || !post.date) {
    console.error('Invalid post data:', post);
    return <div>Error: Invalid post data</div>;
  }

  return (
    <div className='individual-post'>
      <img src={post.thumbnail} width="600" alt="thumbnail"/>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Published on: {new Date(post.date).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogPostPage;