import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/todosService";
import ToDo from "./ToDo";
import css from "./ToDo.module.css"

const ToDos = () => {
    const [toDos, setTodos] = useState([]);
    useEffect(() => {
        todosService.getAll().then(({data})=>setTodos(data))
    }, []);
    return (
        <div className={css.todos}>
            {toDos.map(toDo=><ToDo key={toDo.id} toDo={toDo}/>)}
        </div>
    );
};

export default ToDos;