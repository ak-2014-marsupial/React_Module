import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService={
    getAllByUserId:(userId)=> axiosService.get(urls.posts.byUserId(userId)),
    getPostById:(postId)=> axiosService.get(urls.posts.byPostId(postId))
}

export {
    postService
}