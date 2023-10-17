import React from 'react';

import {data} from "../../data";
import Simpson from "./Simpson";
const Simpsons = () => {

    return (
       <>
           <h2>Simpsons</h2>
           <div className={"flex-x wrap"}>
               {data.map((item, i)=> <Simpson key ={i} person={item}/>)}
           </div>
       </>
    );
};

export default Simpsons;