import {Component} from "react";

import {postsService} from "../../services";
import css from "./Post.module.css"
import {Post} from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log('componentDidMount');
        postsService.getAll().then(({data})=> {
            return this.setState({posts: data})
        })
    }

    render(){
        return (
            <div className={css.posts}>
                {this.state.posts.map(post=> {
                    return <Post key={post.id} post={post}/>
                })}
            </div>
        )

    }
}

export {
    Posts
}