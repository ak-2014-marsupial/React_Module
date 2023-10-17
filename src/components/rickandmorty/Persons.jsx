import React from 'react';

import {rickandmortData} from "../../data.js"
import Person from "./Person";
const Persons = () => {
    return (
       <>
<div className={"container"}>
           <h2>Rick and Mort</h2>
           <div className={"flex-x wrap"}>
               {rickandmortData.map((item,index)=> <Person data={item} key={index}/>)}
           </div>
</div>
       </>
    );
};

export default Persons;