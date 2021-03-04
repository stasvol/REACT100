import React from 'react';
import classes from './Setting.module.css';
import {addNewPostAC, newPostMesTextAC} from "./Set_reducers/setMesreducer";
import {createRef} from "react";
// import {addNewPostAC, newPostMesTextAC} from "./State";




const SettingMessage = (props) => {

        let  addPostNewMes = props.state.posts.map((el,i) => <li key={i}>{el.post} </li>)
          // let newPostMesText = props.newPostMesText

    const handleChangeText = (e) =>{
        let textNew = e.target.value
        props.changeText(textNew)
        // console.log(textNew)
    }

    const handleAddText = () =>{
        // let textNew = e.target.value
        props.addText()


    }


    return (
        <div className={classes.post}>
            {/*<form >*/}
            {/*    <labe >POSTS :</labe>*/}
                <div>
                    <textarea  onChange={handleChangeText} placeholder={'add post'}  defaultValue={props.newPostMesText}  />
                </div>
                <div>
                    <button className={classes.button} onClick={handleAddText} type={"submit"}>Add Post</button>
                </div>

            {/*</form>*/}
            {addPostNewMes}
        </div>
    )

    }



export default SettingMessage