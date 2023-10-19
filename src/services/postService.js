import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => {
        axiosService.get(urls.posts.base)
            // .then(({data})=> console.log(data))
    },

}

export {
    postService
}