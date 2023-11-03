import React from 'react';
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div style={{backgroundColor:"beige", border:"1px solid red"}}>
            <Outlet/>
        </div>
    );
};

export {
    AuthLayout
}