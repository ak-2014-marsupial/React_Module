import axios from "axios";
import {baseURLCar} from "../constants";

const owuService=axios.create({baseURL:baseURLCar});

export {
    owuService,
}