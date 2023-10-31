const baseURL ="https://jsonplaceholder.typicode.com";
const users="/users";
const posts ="/posts";

const urls={
    users:{
        base:users,
        byId:(id)=>`${users}/${id}`
    },
    posts:{
        byUserId:(id)=>`${users}/${id}/${posts}`,
        byPostId:(postId)=>`${posts}/${postId}`
    }

}

export {
    baseURL,
    urls
}