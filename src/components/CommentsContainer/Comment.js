import {Component} from "react";

import css from "./Comment.module.css"

class Comment extends Component {

    render() {
        const {body, email, name} = this.props.comment;

        return (
            <div className={css.comment}>
                <div> body: {body}</div>
                <div> email: {email}</div>
                <div> name: {name}</div>
            </div>
        )
    }
}

export {
    Comment
}