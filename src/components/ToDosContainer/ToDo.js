import React from 'react';

import css from "./ToDo.module.css"

const ToDo = ({toDo}) => {
    const {userId, id, title, completed} = toDo;
    return (
        <div className={css.todo}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
        </div>
    );
};

export default ToDo;