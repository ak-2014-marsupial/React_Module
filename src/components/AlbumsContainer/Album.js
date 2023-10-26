import React from 'react';

import css from "./Albums.module.css"

const Album = ({album}) => {
    const {userId, id, title}= album
    return (
        <div className={css.album}>
           <div>userId: {userId}</div>
           <div>id: {id}</div>
           <div>title: {title}</div>
        </div>
    );
};

export default Album;