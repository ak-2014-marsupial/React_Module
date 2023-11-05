import React, {useEffect, useState} from 'react';
import {characterService} from "../../../services";
import {useParams} from "react-router-dom";
import {Character} from "../Character/Character";

const Characters = () => {
    const {ids} = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getByIds(ids).then(({data})=>console.log(data))
    }, [ids]);
    return (
        <div>
            {characters.map(char=><Character key={char.id} character={char}/>)}

        </div>
    );
};

export {Characters};