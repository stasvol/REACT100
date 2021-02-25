import React from "react";
import classes from './Post.module.css'

const Post = (props) =>{

    return (
        <div>
            <div className={classes.post}>Post: {props.message}</div>
            <img className={classes.imgAvat} src={'https://memax.club/wp-content/uploads/2019/06/Krasivye_avatarki_dlya_kartinki_1_09074657.jpg'}/>
            <span>Like: </span> {props.like}

        </div>
    )
}

export default Post