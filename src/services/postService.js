import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService={
    getAllbyPathName:(pathname)=> axiosService.get(pathname),
    getPostById:(postId)=> axiosService.get(urls.posts.byPostId(postId)),
    getAllByUserId:(userId)=> axiosService.get(urls.posts.byUserId(userId)),
}

export {
    postService
}