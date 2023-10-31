import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../services/postService";
import PostDetails from "../components/PostContainer/PostDetails";
import {commentsService} from "../services/commentsService";
import Comments from "../components/CommentsContainer/comments";

const PostDetailsPage = () => {
const params = useParams();
    const {postId} = params;

    const [post, setPost] = useState(null);
    const [comments, setComments]= useState([])
    useEffect(() => {
        postService.getPostById(postId).then(({data})=>setPost(data))
        commentsService.getAllByPostId(postId).then(({data})=> setComments(data))
    }, []);
    return (
        <div>
            {post && <PostDetails post={post}/>}

            <Comments comments={comments}/>
        </div>
    );
};

export default PostDetailsPage;

