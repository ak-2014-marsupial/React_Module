import React from 'react';

const User = ({user}) => {
    const {id, name, phone, username, website}=user;
    console.log(user);
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>phone: {phone}</div>
            <div>username: {username}</div>
            <div>website: {website}</div>
        </div>
    );
};

export default User;