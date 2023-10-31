import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import {userService} from "./services/userService";

const router=createBrowserRouter([
    {
        path:'/', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users', element:<UsersPage/> , children:[
                    {path:':userId', element:<UserDetailsPage/>, loader:({params:{userId}})=>userService.getById(userId)},
                ]} ,

            {path:'posts', element:<PostDetailsPage/>}
        ]
    }
])

export {
    router
}