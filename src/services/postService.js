import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => {
        axiosService.get(urls.posts.base)
    },

}

export {
    postService
}