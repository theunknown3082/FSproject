import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../posts.json';

const PostDetailPage = () => {
    const { id } = useParams();
    const post = postsData.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post-detail-page">
            <section className="hero">
                <h2>{post.title}</h2>
                <p className="post-meta">by {post.author} on {post.date}</p>
            </section>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
        </div>
    );
};

export default PostDetailPage;
