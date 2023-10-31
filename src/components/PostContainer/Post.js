import React from 'react';
import {useNavigate} from "react-router-dom";

import css from "./Post.module.css"

const Post = ({post}) => {
    const navigate = useNavigate();
    const {title, id} = post;
    return (
        <div className={css.post}>
            {title}
            <button onClick={() => navigate(`${id}`)}>Post details</button>
        </div>
    );
};

export default Post;