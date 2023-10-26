import React from 'react';
import ToDos from "../components/ToDosContainer/ToDos";
import {Outlet} from "react-router-dom";
import Albums from "../components/AlbumsContainer/Albums";

const ToDoPage = () => {
    return (
        <div>
            <Albums/>
            <Outlet/>

        </div>
    );
};

export default ToDoPage;