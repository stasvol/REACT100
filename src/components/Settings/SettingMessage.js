import React from 'react';
import classes from './Setting.module.css';
import {addNewPostAC, newPostMesTextAC} from "./Set_reducers/setMesreducer";
import {createRef} from "react";
import {Field, reduxForm} from "redux-form";
// import {addNewPostAC, newPostMesTextAC} from "./State";




const SettingMessage = (props) => {

        let  addPostNewMes = props.posts.map((el,i) => <li key={i}>{el.post} </li>)
          // let newPostMesText = props.newPostMesText

    // const handleChangeText = (e) =>{
    //     let textNew = e.target.value
    //     props.changeText(textNew)
    //     // console.log(textNew)
    // }


    const handleAddText = (value) =>{
        // let textNew = e.target.value
        props.addText(value.newPostMesText)
       console.log(value.newPostMesText)

    }


    return (
        <div className={classes.post}>

                <SetMessageFormRedux onSubmit={handleAddText}/>
            {/*<form >*/}
            {/*    <labe >POSTS :</labe>*/}
            {/*    <div>*/}
            {/*        <textarea  onChange={handleChangeText} placeholder={'add post'}  value={props.newPostMesText}  />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button className={classes.button} onClick={handleAddText} type={"submit"}>Add Post</button>*/}
            {/*    </div>*/}

            {/*</form>*/}
            {addPostNewMes}
        </div>
    )

    }

const SetMessageForm = (props) =>{
    const {handleSubmit} = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field  name={'newPostMesText'} component={'textarea'} placeholder={'add post'} />
            </div>
            <div>
                <button className={classes.button} >Add Post</button>
            </div>

        </form>
    )
}
const SetMessageFormRedux = reduxForm({
    form: 'setTwo'
})(SetMessageForm);


    export default SettingMessage




