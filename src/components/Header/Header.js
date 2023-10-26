import React from 'react';
import css from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={"/todos"}>Todos</NavLink>
                <NavLink to={"/albums"}>Albums</NavLink>
                <NavLink to={"/comments"}>Comments</NavLink>
            </div>

        </div>
    );
};

export default Header;