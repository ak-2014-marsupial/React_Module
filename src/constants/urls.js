const baseURLJson=  'https://jsonplaceholder.typicode.com';
const baseURLCar = 'http://owu.linkpc.net/carsAPI/v1';

const posts="/posts";
const comments="/comments"
const cars ="/cars";


const urls={
    posts:{
        base:posts,
        commentsByPostId:(id)=>`${posts}/${id}/${comments}`
    },
    cars:{
        base:cars,
    }
}

export {
    baseURLJson,
    baseURLCar,
    urls

}
