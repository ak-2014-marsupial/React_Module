import React from 'react';
import {Outlet, useLoaderData, useNavigate} from "react-router-dom";

import UserDetails from "../components/UsersContainer/UserDetails";
import css from "./UsersPage.module.css"

const UserDetailsPage = () => {
    const {data} = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className={css.UsersPage}>
            {<UserDetails data={data}/>}
            <button onClick={() => navigate(`posts`)}>Posts of current user</button>
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;