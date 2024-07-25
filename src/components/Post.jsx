import React from 'react';
import { motion } from 'framer-motion';

const Post = ({ title, content, imgSrc }) => (
    <motion.div
        className="post"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        {imgSrc && <img src={imgSrc} alt={title} />}
        <h2>{title}</h2>
        <p>{content}</p>
    </motion.div>
);

export default Post;
