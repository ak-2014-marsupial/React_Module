import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService={
    getAll:()=>axiosService.get(urls.users.base),
    getById:(userId)=>axiosService.get(urls.users.byId(userId))
}

export {
    userService
}