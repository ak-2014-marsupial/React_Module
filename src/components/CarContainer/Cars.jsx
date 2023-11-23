import React, {Component} from 'react';

import {carService} from "../../services";
import {Car} from "./Car";
import css from "./Car.module.css"

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        carService.getAll().then(({data}) => this.setState({cars:data}))
    }

    render() {

        return (
            <div className={css.cars}>
                {this.state.cars.map(car=><Car key={car.id} car={car}/>)}
            </div>
        )


    }
}

export {Cars};