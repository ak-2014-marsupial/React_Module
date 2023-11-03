import {axiosService} from "./axiosService";
import {urls} from "../contacts";

const carService={
    getAll:(page)=>axiosService.get(urls.cars.base,{params:{page:page}}),
    create:(data)=>axiosService.post(urls.cars.base,data)
}

export {
    carService
}