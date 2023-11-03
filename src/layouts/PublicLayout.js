import React from 'react';
import {Outlet} from "react-router-dom";

const PublicLayout = () => {
    return (
        <div style={{backgroundColor:"lightcoral", border:"1px solid red"}}>
            <Outlet/>
        </div>
    );
};

export {
    PublicLayout
}