import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    flag:true
}


const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers:
        {
            setResponse: (state, action) => {
                state.cars = action.payload;
            },
            setCarForUpdate: (state, action) => {
                state.carForUpdate = action.payload;
            },
            toogleFlag:(state,actions)=>{
                state.flag=!state.flag;
            },
        }
});

// const setResponse = carSlice.actions.setResponse;

const {reducer: carReducer, actions} = carSlice;
const carActions = {...actions};

export {
    carReducer,
    carActions
}