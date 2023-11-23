import React, {Component} from 'react';

import css from "./Post.module.css"

class Post extends Component{


    render(){
        const {id,body,title} = this.props.post;
        return(
            <div className={css.post}>
                <div>id : {id}</div>
                <div>title : {title}</div>
                <div> body: {body}</div>
            </div>
        )

    }
}

export {
    Post
}