import React from 'react';
import {createBrowserRouter, Navigate} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import ToDoPage from "./pages/ToDoPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <Navigate to={'todos'}/>},

            {path: 'todos', element: <ToDoPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'post', element: <PostPage/>}
                ]
            },
        ]
    },
])

export {router};