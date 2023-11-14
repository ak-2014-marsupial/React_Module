import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';

import {carService} from "../services";
import {Car} from "./Car";
import {carActions} from "../redux/slices/carSlice";

import css from "./Car.module.css"
import {CarForm} from "./CarForm";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars,flag} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data})=> dispatch(carActions.setResponse(data)));
    }, [flag,dispatch]);

    return (
        <>
            <CarForm/>
            <div className={css.cars}>
                {cars.map(car=><Car key={car.id} car={car}/> )}
            </div>

        </>
    );
};

export  {Cars};