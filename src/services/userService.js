import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const headers= {
    'Content-type': 'application/json; charset=UTF-8',
};
const userService= {
    getAll:()=>axiosService.get(urls.users),
    create:(user)=>axiosService.post(urls.users,user,{headers})
}

export {
    userService
}