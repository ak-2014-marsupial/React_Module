import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import css from "./Comments.module.css"

const Comment = ({comment}) => {
    const {body, email, id, name, postId}=comment;
    const navigate = useNavigate();

    return (
        <div className={css.comment} onClick={()=> navigate('post',{state:{postId}})}>
            <div>body: {body} </div>
            <div>email: {email} </div>
            <div>id: {id} </div>
            <div>name: {name} </div>
            <div>postId: {postId} </div>
        </div>
    );
};

export default Comment;