import {axiosService} from "./axiosService";
import {urls} from "../constatnts/urls";

const todosService={
    getAll:()=>axiosService.get(urls.todos.base)
}

export {
    todosService
}