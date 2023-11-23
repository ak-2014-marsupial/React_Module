import axios from "axios";
import {baseURLJson} from "../constants";

const jsonService=axios.create({baseURL:baseURLJson});
export {
    jsonService
}