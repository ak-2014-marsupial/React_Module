import React from 'react';

import css from "./Comments.module.css"

const Comment = ({comment,handlerClick}) => {
    const {body, email, id, name, postId}=comment;
    return (
        <div className={css.comment} onClick={()=> handlerClick(postId)}>
            <div>body: {body} </div>
            <div>email: {email} </div>
            <div>id: {id} </div>
            <div>name: {name} </div>
            <div>postId: {postId} </div>
        </div>
    );
};

export default Comment;