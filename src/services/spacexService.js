import {axiosSpacexService} from "./axiosService";
import {urls} from "../constants/urls";

const spacexService = {
    getAll: () =>( axiosSpacexService.get(urls.spacex.base)),
}

export {
    spacexService
}