import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import CarForm from "./CarForm";
import Cars from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger]= useState(false);
    const [carForUpdate,setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
        console.log(trigger);
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>

        </div>
    );
};

export default CarsContainer;