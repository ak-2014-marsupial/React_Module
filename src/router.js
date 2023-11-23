import {createBrowserRouter} from "react-router-dom";
import {CarPage, PostPage} from "./pages";
import {MainLayout} from "./layouts";

const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,children:[
            {index:true,element:"cars"},
            {path:"cars",element:<CarPage/>},
            {path:"posts",element:<PostPage/>}
        ]
    }
]);

export {
    router
}