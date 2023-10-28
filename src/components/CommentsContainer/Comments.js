import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import Comment from "./Comment";
import css from "./Comments.module.css"

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);


    return (
        <div>

            <div className={css.comments}>
                {comments.map(comment => <Comment key={comment.id}  comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;