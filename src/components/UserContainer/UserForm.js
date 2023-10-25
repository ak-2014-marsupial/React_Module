import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
    const {reset, handleSubmit, register} = useForm();
    const  save = async (user) => {
        // userService.create(user).then(({data})=> console.log(data))
        const {data} = await userService.create(user);
        setUsers(prev => [...prev, data])
        reset()

    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"name"} name={"name"} {...register("name")}/>
            <input type="text" placeholder={"phone"} name={"phone"} {...register("phone")}/>
            <input type="text" placeholder={"website"} name={"website"} {...register("website")}/>
            <input type="text" placeholder={"username"} name={"username"} {...register("username")}/>
            <input type="text" placeholder={"company name"} name={"companyname"} {...register("company.name")}/>
            <input type="text" placeholder={"company bs"} name={"companybs"} {...register("company.bs")}/>
            <button>Save</button>
        </form>
    );
};

export default UserForm;