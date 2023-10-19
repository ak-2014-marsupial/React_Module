import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () =>( axiosService.get(urls.posts.base)),
    getPostById:(id)=> (axiosService.get(urls.posts.byId(id)))


}

export {
    postService
}