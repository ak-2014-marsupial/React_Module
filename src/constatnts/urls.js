
const baseURL="https://jsonplaceholder.typicode.com"

const urls={
    todos:{
        base:"/todos"
    },
    albums:{
        base:"/albums"
    },
    comments:{
        base:"/comments"
    },
    posts:{
        base:"/posts",
        getById:(id)=>`/posts/${id}`
    }

}

export {
    baseURL,
    urls
}