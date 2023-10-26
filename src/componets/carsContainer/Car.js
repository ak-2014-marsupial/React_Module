import React from 'react';
import {carService} from "../../services/carService";

const Car = ({car, setCarForUpdate, trigger}) => {
    const {id,brand,price,year}=car;

    const del = async ()=>{
        await carService.deleteById(id);
        trigger()
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={()=>del(id) }>Delete</button>
        </div>
    );
};

export default Car;