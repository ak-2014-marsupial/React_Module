import React from 'react';
import {useState,useEffect} from "react";

import {axiosService} from "../../../services/axiosService"
import axios from "axios";
import {postService} from "../../../services/postService"

import css from "./Posts.module.css";
import {urls} from "../../../constants/urls";
import {logDOM} from "@testing-library/react";


const Posts = () => {
    const [posts,setPosts]=useState([]);
    const [userDetails, setUserDetails]= useState(null)
    useEffect(()=>{
        // fetch("https://jsonplaceholder.org/posts").then(res=>res.json()).then(posts=> console.log(posts));
       axiosService.get(urls.posts.base).then(({data})=> console.log(data));

       postService.getAll()
           .then(({data})=> console.log(data))//Cannot read properties
           //                                  // of undefined (reading 'then')

    },[])



    return (
        <div>
            <div >
                {/*{posts.map(post=> console.log(post))}*/}
            </div>

        </div>
    );
};

export { Posts};