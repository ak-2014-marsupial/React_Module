import React from 'react';

import Simpsons from "./components/simpsons/Simpsons";
import Persons from "./components/rickandmorty/Persons";
const App = () => {
    return (
        <div>
            <Simpsons/>
            <br/>
            <br/>
            <Persons/>

        </div>
    );
};

export {App};