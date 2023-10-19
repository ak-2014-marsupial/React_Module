import React from 'react';
import {Posts} from "./components/PostsContainer/Posts/Posts";
import {findAllByDisplayValue} from "@testing-library/react";
import Launches from "./components/SpaceX/Launches/Launches";

const App = () => {
    return (
        <div>
            <Posts/>
            <br/>
            <br/>
            <Launches/>
        </div>


    );
};

export {App};