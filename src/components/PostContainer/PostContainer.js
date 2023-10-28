import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postsService} from "../../services/postsService";
import Post from "./Post";

const PostContainer = () => {
    const {state:{postId}}=useLocation();
    const [post,setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(({data})=> setPost(data))
    }, [postId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export default PostContainer;