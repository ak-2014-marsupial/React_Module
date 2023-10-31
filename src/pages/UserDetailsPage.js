import React from 'react';
import {useLoaderData, useParams} from "react-router-dom";

const UserDetailsPage = () => {

    // let {userId} = useParams();

    const {data} = useLoaderData();

    console.log(data);

    return (
        <div>
            <h1>UserDetails</h1>
        </div>
    );
};

export default UserDetailsPage;