import React from 'react';
import Post from './Post';

const posts = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the content of the first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgSrc: '/images/post1.jpg'
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'This is the content of the second post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imgSrc: '/images/post2.jpg'
    }
];

const PostList = () => (
    <div className="post-list">
        {posts.map(post => (
            <Post key={post.id} title={post.title} content={post.content} imgSrc={post.imgSrc} />
        ))}
    </div>
);

export default PostList;
