import React, {useEffect, useState} from 'react';
import CommentsForm from "./CommentsForm";
import Comments from "./Comments";
import {commentService} from "../../services/commentService";

const CommentsContainer = () => {
    const [comments, setComments]= useState([]);

    useEffect(() => {
        commentService.getAll().then(({data})=> setComments(data))
    }, []);

    return (
        <div>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
            
        </div>
    );
};

export default CommentsContainer;