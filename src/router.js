import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import {userService} from "./services/userService";
import Posts from "./components/PostContainer/Posts";

const router=createBrowserRouter([
    {
        path:'/', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users', element:<UsersPage/> },
            {path:'users/:userId', element:<UserDetailsPage/>,
                loader:({params:{userId}})=>userService.getById(userId),
                children:[
                    {path:'posts', element:<Posts/> },
                ]},
            {path:'users/:userId/posts/:postId', element:<PostDetailsPage/>    }

        ]
    }
])
export {
    router
}