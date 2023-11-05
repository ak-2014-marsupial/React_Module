import React from 'react';

import css from "./Episode.module.css"

const Episode = ({episode}) => {
    // console.log(episode);
    const {id, name,episode:character} = episode;
    return (
        <div className={css.episode}>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> episode: {character}</div>
        </div>
    );
};

export {Episode};