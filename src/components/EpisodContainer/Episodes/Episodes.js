import React, {useEffect, useState} from 'react';

import {episodeService} from "../../../services";
import css from "./Episodes.module.css"
import {Episode} from "../Episode/Episode";
import { useSearchParams} from "react-router-dom";

const Episodes = () => {
    const [episodes, setEpisodes] = useState({prev: null, next: null, results: []});
    const [query, setQuery] = useSearchParams({page:"1"});
    const page=query.get('page');

    console.log(page);
    useEffect(() => {
        episodeService.getAll(page).then(({data:{info:{next,prev},results:results}})=> setEpisodes({next,prev,results}))
    }, [page]);

    const next=()=>{
        setQuery(prev =>{
            prev.set('page',`${+page+1}`);
            return prev;
        })
    }

    const prev=()=>{
        setQuery(prev=>{
            prev.set('page',`${+page-1}`);
            return prev;
        })
    }

    return (
        <>
            <h2>EPISODES</h2>
            <div className={css.episodes}>
                {episodes.results.map(ep=><Episode key={ep.id} episode={ep}/>)}
            </div>
            <button disabled={!episodes.prev} onClick={prev}>Prev</button>
            <button disabled={!episodes.next} onClick={next}>Next</button>
        </>
    );
};

export  {Episodes};