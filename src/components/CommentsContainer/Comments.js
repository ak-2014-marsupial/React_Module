import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import {commentsService} from "../../services/commentsService";

import css from "./Comments.module.css"
import {postsService} from "../../services/postsService";
import {post} from "axios";
import Post from "../PostContainer/Post";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [postId, setPostId] = useState(null);
    const [post, setPost] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);
    const handlerClick = (id) => setPostId(id);

    useEffect(() => {
        if (postId) {
            postsService.getById(postId).then(({data}) => setPost(data))
        }
    }, [postId])

    return (
        <div>
            <div>
                { <Post post={post}/> }
            </div>
            <div className={css.comments}>
                {comments.map(comment => <Comment key={comment.id} handlerClick={handlerClick} comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;