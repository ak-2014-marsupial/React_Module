import {axiosService} from "./axiosService";
import {urls} from "../constatnts/urls";

const albumsService={
    getAll:()=> axiosService.get(urls.albums.base)
}
export{
    albumsService
}