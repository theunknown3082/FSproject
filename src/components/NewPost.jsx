import React from 'react';

const NewPostPage = () => {
    return (
        <div className="page new-post">
            <h2>Create New Post</h2>
            <form>
                <input type="text" placeholder="Post Title" />
                <textarea placeholder="Write your post here..."></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default NewPostPage;
