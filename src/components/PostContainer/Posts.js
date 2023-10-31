import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postService} from "../../services/postService";
import Post from "./Post";

import css from "./Post.module.css"

const Posts = () => {
    const {pathname} = useLocation();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAllbyPathName(pathname).then(({data})=> setPosts(data))
    }, [pathname]);

    return (
        <>
            <h2 >List of Posts current user</h2>
            <div className={css.posts}>
                {posts && posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        </>

    );
};

export default Posts;