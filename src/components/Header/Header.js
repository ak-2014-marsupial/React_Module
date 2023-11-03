import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from "./Header.module.css"
import {useAppContext} from "../../hooks/useAppContext";
import {authService} from "../../services";
const Header = () => {
    const navigate = useNavigate();
    const {isAuth,me,setMe, setIsAuth} = useAppContext();

    const logOut=()=>{
        authService.deleteToken();
        navigate('/login')
        setMe(null);
        setIsAuth(false)

    }

    return (
        <div className={css.header}>
            <h1>Cars</h1>

            {isAuth? (<div>
                    {me.username}
                <button onClick={logOut}>LogOut</button>
            </div>):
                (<div>
                    <NavLink to={'login'}>Login</NavLink>
                    <NavLink to={'register'}>Register</NavLink>
                </div>)
            }

        </div>
    );
};

export {
    Header
};