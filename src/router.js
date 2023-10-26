import React from 'react';
import {createBrowserRouter, Navigate} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import ToDoPage from "./pages/ToDoPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <Navigate to={'todos'}/>},
            // {
            //     path: 'users', element: <UsersPage/>, children: [
            //         {path: 'posts', element: <PostsPage/>}
            //     ]
            // },
            {path: 'todos', element: <ToDoPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {path: 'comments', element: <CommentsPage/>},
        ]
    },
])

export {router};