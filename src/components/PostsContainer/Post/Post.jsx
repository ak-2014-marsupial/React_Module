import React from 'react';

import css from "./Post.module.css"

const Post = ({post,handleClick,children}) => {
    const {id,title}=post;
    return (
        <div className={css.post}>
            <div>
                <div>id:{post.id}</div>
                <div>title:{title}</div>
            </div>
            <div>
                <button className={css.button} onClick={()=>handleClick(id)}>Post Details</button>
            </div>
            <div>
                {children}

            </div>

        </div>

    );
};

export default Post;