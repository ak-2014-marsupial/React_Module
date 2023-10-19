import React from 'react';
import {useState,useEffect} from "react";

import {postService} from "../../../services/postService"
import Post from "../Post/Post";
import PostDetails from "../PostDetails/PostDetails";
import css from "./Posts.module.css"


const Posts = () => {
    const [posts,setPosts]=useState([]);
    const [postDetails, setPostDetails]= useState(null)
    useEffect(()=>{
       postService.getAll()
           .then(({data})=> setPosts(data))
    },[])

    const handleClick = async (id)=>{
        const {data} = await postService.getPostById(id);
        setPostDetails(data);
    }

    return (
        <div >
           <div className={css.posts}>
               {posts.map(post=>
                   <Post key={post.id} post={post}
                         handleClick={handleClick}
                   />)}
           </div>
            <div>
                {postDetails && <PostDetails postDeatails={postDetails}/>}
            </div>
        </div>
    );
};

export { Posts};