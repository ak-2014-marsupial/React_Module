import React, {useEffect, useState} from 'react';

import css from "./Albums.module.css"
import {albumsService} from "../../services/albumsService";
import Album from "./Album";

const Albums = () => {
   const [albums, setAlbums]= useState([]);
    useEffect(() => {
        albumsService.getAll().then(({data})=>setAlbums(data))
    }, []);

    return (
        <div className={css.albums}>
            {albums.map(album=> <Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;