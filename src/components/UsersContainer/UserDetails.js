import React from 'react';

import css from "./User.module.css"

const UserDetails = ({data}) => {
    const {email,id, name, phone, username,website}=data;
    return (
        <div className={css.user}>
            <div>email: {email}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>phone: {phone}</div>
            <div>username: {username}</div>
            <div>website: {website}</div>
        </div>
    );
};

export default UserDetails;