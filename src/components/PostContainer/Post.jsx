import React, {Component} from 'react';

import css from "./Post.module.css"
import {postsService} from "../../services";
import {Comment} from "../CommentsContainer";

class Post extends Component{

    constructor(props) {
        super(props);
        this.state={
            comments:[]
        }
    }

handleClick = async (id)=>{
        const {data} = await postsService.getCommentsByIdPost(id);
        this.setState({comments:data})

}
    render(){
        const {id,body,title} = this.props.post;
        return(
            <div className={css.post}>
                <div onClick={()=>this.handleClick(id)}>
                    <div>id : {id}</div>
                    <div>title : {title}</div>
                    <div> body: {body}</div>

                </div>

                <div className={css.comment}>
                    {this.state.comments.map((comment)=> <Comment key={comment.id} comment={comment}/>)}
                </div>
            </div>

        )

    }
}

export {
    Post
}