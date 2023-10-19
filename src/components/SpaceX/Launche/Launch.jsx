import React from 'react';

import css from "./Launche.module.css"
const Launch = ({mission}) => {

    const {mission_name,launch_year,links}=mission;
    return (
        <div className={css.launch}>
            <div className={css.mission_name}>mission name: {mission_name}</div>
            <div>year: {launch_year}</div>
            <div>
                <img src={links.mission_patch_small} alt="mission_name"/>
            </div>
        </div>
    );
};

export default Launch;