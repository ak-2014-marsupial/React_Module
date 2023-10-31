import React from 'react';

import css from "./Post.module.css"

const PostDetails = ({post}) => {
    const {userId,id,title,body}=post;
    return (
        <>
            <h2>Post details:</h2>

            <div className={css.posts}>
                <div className={css.post}>
                    <div> userId: {userId}</div>
                    <div> id: {id}</div>
                    <div> title: {title}</div>
                    <div> body: {body}</div>
                </div>
            </div>
        </>

    );
};

export default PostDetails;