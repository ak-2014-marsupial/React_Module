const postsBaseURL ="https://jsonplaceholder.org";
const spacexBaseUrl ="https://api.spacexdata.com";
const posts ="/posts";
const launches = "/v3/launches/"
const urls={
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    },
    spacex:{
        base:launches
    }

}

export {
    postsBaseURL,
    spacexBaseUrl,
    urls
}