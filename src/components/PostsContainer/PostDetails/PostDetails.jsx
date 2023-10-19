import React from 'react';
import css from "./PostDetails.module.css"

const PostDetails = ({postDeatails}) => {
    return (
        <div className={css.post_details}>
            {Object.entries(postDeatails).map(([key,value],index)=>(
                <div key={index}>
                    {key}: <strong>{value}</strong>
                </div>
            ))}
        </div>
    );
};

export default PostDetails;