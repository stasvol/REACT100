import React from 'react';
import classes from './Setting.module.css';
import {addNewPostAC, newPostMesTextAC} from "./Set_reducers/setMesreducer";
import {createRef} from "react";
import SettingMessage from "./SettingMessage";
import {connect} from "react-redux";
// import {addNewPostAC, newPostMesTextAC} from "./State";




// const SettingMessageContainer = (props) => {
//
//     const changeText = (textNew) =>{
//         // let textNew = e.target.value
//         props.Store.dispatch(newPostMesTextAC(textNew))
//         // console.log(textNew)
//     }
//
//     const addText = () =>{
//         // let textNew = e.target.value
//         props.Store.dispatch(addNewPostAC())
//
//
//     }
//
//
//     return (
//           <SettingMessage state={props.Store.getState()} changeText={changeText}
//                           addText={addText} newPostMesText={props.Store.getState().newPostMesText}/>
//     )
//
//     }

    const mapStateToPros = (state) => {

      return {
          posts: state.posts.posts,
          newPostMesText: state.posts.newPostMesText
      }
    }
    const mapDispatchToProps = (dispatch) =>{
            return {
                changeText: (textNew) => {
                    dispatch(newPostMesTextAC(textNew))
                },
                addText: () => {
                    dispatch(addNewPostAC())
                }
            }
    }

    const SettingMessageContainer = connect(mapStateToPros, mapDispatchToProps)(SettingMessage)

export default SettingMessageContainer