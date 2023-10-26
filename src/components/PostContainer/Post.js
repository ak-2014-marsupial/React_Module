import React from 'react';
import css from "./Post.module.css"

const Post = ({post}) => {
    const {body, id, title, userId} = post;
        return (
        <div className={css.post}>
            <div>body: {body}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>userId: {userId}</div>
        </div>
    );
};

export default Post;