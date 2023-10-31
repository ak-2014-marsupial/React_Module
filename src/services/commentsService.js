import {axiosService} from "./axiosService";

const commentsService = {
    getAllByPostId: (postId) => axiosService.get(`/comments?postId=${postId}`),
}


export {
    commentsService
}