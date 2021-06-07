import React from "react";
import classes from './Post.module.css'
import {PostDataType} from "../../../../redux/prof_reducer";


const Post:React.FC<PostDataType> = (props) =>{


    return (
        <div>
            <div className={classes.post}>Post: {props.message}</div>
            <img className={classes.imgAvat} src={'https://memax.club/wp-content/uploads/2019/06/Krasivye_avatarki_dlya_kartinki_1_09074657.jpg'} alt={"image"}/>
            <span>Like: </span> {props.like}

        </div>
    )
}

export default Post