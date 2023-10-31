import React from 'react';

import css from "./Comments.module.css"

const Comment = ({comment}) => {
    const {id, postId, body, email, name} = comment;
    return (
        <div className={css.comment}>
            <div> id: {id}</div>
            <div> postId: {postId}</div>
            <div>body: {body}</div>
            <div> email: {email}</div>
            <div> name:{name}</div>
        </div>
    );
};

export default Comment;