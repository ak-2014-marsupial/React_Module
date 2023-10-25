import React from 'react';
import UserContainer from "./components/UserContainer/UserContainer";
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";

const App = () => {
    return (
        <div style={{display: "flex"}}>
            <UserContainer/>
            <CommentsContainer/>
        </div>
    );
};

export {App};