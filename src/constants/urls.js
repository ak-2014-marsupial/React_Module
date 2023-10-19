const baseURL ="https://jsonplaceholder.org";
const posts ="/posts";
const urls={
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    },
}

export {
    baseURL,
    urls
}