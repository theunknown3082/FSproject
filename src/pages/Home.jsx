import React, { useState, useEffect } from 'react';
import postsData from '../posts.json'; // Import the posts data

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Simulate fetching posts from a server
        setPosts(postsData);
    }, []);

    return (
        <div className="home-page">
            <section className="hero">
                <h2>Welcome to the Blog</h2>
                <p>Explore the latest posts and updates.</p>
            </section>
            <div className="posts-container">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p className="post-meta">by {post.author} on {post.date}</p>
                        <p>{post.content.substring(0, 100)}...</p>
                        <a href={`/post/${post.id}`} className="read-more">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
