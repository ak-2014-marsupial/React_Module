import {jsonService} from "./jsonService";
import {urls} from "../constants";

const postsService={
    getAll:()=>jsonService.get(urls.posts.base),
    getCommentsByIdPost : (id)=>jsonService.get(urls.posts.commentsByPostId(id)),
}

export {
    postsService,
}