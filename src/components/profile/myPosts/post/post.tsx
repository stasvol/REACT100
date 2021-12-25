import React from "react";

import {PostDataType} from "../../../../redux/prof_reducer";

import classes from './post.module.css';


const Post:React.FC<PostDataType> = (props) =>{
    const Url = 'https://memax.club/wp-content/uploads/2019/06/Krasivye_avatarki_dlya_kartinki_1_09074657.jpg'

    return (
        <div>
            <div className={classes.post}>Post: {props.message}</div>
            <img className={classes.imgAvat} src={Url} alt={"image"}/>
            <span>Like: </span> {props.like}

        </div>
    )
}

export default Post