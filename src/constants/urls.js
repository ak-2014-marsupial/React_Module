const baseURL = "https://rickandmortyapi.com/api";
const episode ='/episode';
const character='/character'


const urls={
    episode,
    characters:{
        byIds : (ids)=>`${character}/${ids}`
    }
}


export {
    baseURL,
    urls
}