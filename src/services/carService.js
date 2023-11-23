import {owuService} from "./owuService";
import {urls} from "../constants";

const carService={
    getAll:()=>owuService.get(urls.cars.base),
}

export {
    carService
}