import React from 'react';

import "../style.css"

const Simpson = ({person}) => {
    const {name,surname,age,info,photo} =person;
    return (
        <div className={'wrapper flex-x w-30 p-05'}>
            <div className={"w-40"}>
                <h4 >{name}  {surname}</h4>
                <h5 >{age}</h5>
                <div className={"image"}>
                    <img src={photo} alt="{name}"/>
                </div>
            </div>
            <div >
                <h5>{info}</h5>
            </div>
            
        </div>
    );
};

export default Simpson;