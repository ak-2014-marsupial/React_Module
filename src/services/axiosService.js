import axios from "axios";
import {postsBaseURL,spacexBaseUrl} from "../constants/urls";

const axiosService =axios.create({baseURL: postsBaseURL});
const axiosSpacexService = axios.create({baseURL:spacexBaseUrl});

export {
    axiosService,
    axiosSpacexService
}