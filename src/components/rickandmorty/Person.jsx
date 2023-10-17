import React from 'react';

import "../style.css"

const Person = ({data}) => {
    const {id, name, status, species,image, gender}=data;
    console.log(name,gender);
    return (
        <div className={"flex-x w-40  wrapper-2"}>
            <div className={"w-40 "}>
                <img src={image} alt="{name}"/>
            </div>
            <div >
                <h2>{name}</h2>
                <h3>{status} - {species}</h3>
                <h3>{gender}</h3>
            </div>
        </div>
    );
};

export default Person;