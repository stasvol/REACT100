import React from 'react';
import classes from './MyPost.module.css';
import Post from "./Post/Post";
import {addNewPostActionCreator, handleChangeActionCreator} from '../../../redux/post_reducer';
import MyPost from "./MyPost";


const MyPostContainer = (props) => {

    // let newPostText = React.createRef();

    const addNewPost = () => {
        // let newPost = newPostText.current.value;
        // props.addPost();
        // newPostText.current.value = '';
        // props.addChangeText('')
        let action = addNewPostActionCreator();
        props.store.dispatch(action);
    }

    const handleChange = (newPost) =>{
        // let newPost = newPostText.current.value;
        // props.addChangeText(newPost)
        props.store.dispatch(handleChangeActionCreator(newPost));
    }


    return (
          <MyPost  addChangeText={handleChange} addPost={addNewPost} PostData={props.PostData} newText={props.newText}  post={'MY POSTS'}  />

    )

}



export default MyPostContainer