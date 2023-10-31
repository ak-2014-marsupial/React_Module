import React from 'react';

import Comment from "./Comment";
import css from "./Comments.module.css"


const Comments = ({comments}) => {
    return (
        <>
            <h2>Comments</h2>
            <div className={css.comments}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </>

    );
};

export default Comments;