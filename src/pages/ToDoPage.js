import React from 'react';
import ToDos from "../components/ToDosContainer/ToDos";
import {Outlet} from "react-router-dom";

const ToDoPage = () => {
    return (
        <div>
            <ToDos/>
            <Outlet/>
            
        </div>
    );
};

export default ToDoPage;