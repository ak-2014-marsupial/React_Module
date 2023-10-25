import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";

const CommentsForm = ({setComments}) => {
    const {reset, register, handleSubmit} = useForm();
    const save = async (comment) => {
        const {data} = await commentService.create(comment);
        setComments(prev => [...prev, data]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" name={"name"} placeholder={'name'} {...register('name')}/>
            <input type="text" name={"email"} placeholder={'email'} {...register('email')}/>
            <input type="text" name={"body"} placeholder={'body'} {...register('body')}/>
            <button>Save</button>

        </form>
    );
};

export default CommentsForm;