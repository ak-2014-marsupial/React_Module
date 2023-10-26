import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import {commentsService} from "../../services/commentsService";

import css from "./Comments.module.css"
const Comments = () => {
    const [comments, setComments]= useState([]);

    useEffect(() => {
    commentsService.getAll().then(({data})=> setComments(data))
    }, []);

    return (
        <div className={css.comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;