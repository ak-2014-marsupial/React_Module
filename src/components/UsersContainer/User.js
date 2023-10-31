import React from 'react';
import {useNavigate} from "react-router-dom";

import css from "./User.module.css"


const User = ({user}) => {
    let navigate = useNavigate();

    const {id,name} = user;
    return (
        <div className={css.user}>
          <div> id: {id}</div>
          <div> name: {name}</div>
            <button onClick={()=>navigate(`${id}`)}>User Details</button>
        </div>
    );
}

export default User;