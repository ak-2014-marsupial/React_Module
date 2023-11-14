import React from 'react';
import {useDispatch} from "react-redux";

import css from "./Car.module.css"
import {carActions} from "../redux/slices/carSlice";
import {carService} from "../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();


    const handleUpdate = (car) => {
        dispatch(carActions.setCarForUpdate(car))
    };
    const handleDelete= async ()=>{
        await carService.deleteById(id);
        dispatch(carActions.toogleFlag())
    }

    return (
        <div className={css.car}>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={() => handleUpdate(car)}>Update</button>
            <button onClick={()=>handleDelete(car)}>Delete</button>
        </div>
    );
};

export {Car};