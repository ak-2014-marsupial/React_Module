import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/userService";
import User from "./User";
import css from "./User.module.css"

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div >
            <div className={css.Users}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>

        </div>
    );

}
export default Users;