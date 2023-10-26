import {axiosService} from "./axiosService";
import {urls} from "../constatnts/urls";

const commentsService={
    getAll:()=>axiosService.get(urls.comments.base),
}
export {
    commentsService
}