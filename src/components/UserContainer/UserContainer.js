import React, {useEffect, useState} from 'react';
import UserForm from "./UserForm";
import Users from "./Users";
import {userService} from "../../services/userService";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
             <Users users={users}/>

        </div>
    );
};

export default UserContainer;
