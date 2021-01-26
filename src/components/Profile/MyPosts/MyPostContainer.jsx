import React from 'react';
import classes from './MyPost.module.css';
import Post from "./Post/Post";
import {addNewPostActionCreator, handleChangeActionCreator} from '../../../redux/post_reducer';
import MyPost from "./MyPost";
// import MyContext from "../../../MyContext";
import {connect} from "react-redux";


// const MyPostContainer1 = (props) => {
//     // let newPostText = React.createRef();
//
//     // const addNewPost = () => {
//     //     // let newPost = newPostText.current.value;
//     //     // props.addPost();
//     //     // newPostText.current.value = '';
//     //     // props.addChangeText('')
//     //     let action = addNewPostActionCreator();
//     //     props.store.dispatch(action);
//     // }
//     //
//     // const handleChange = (newPost) => {
//     //     // let newPost = newPostText.current.value;
//     //     // props.addChangeText(newPost)
//     //     props.store.dispatch(handleChangeActionCreator(newPost));
//     // }
//
//
//     return (
//         <MyContext.Consumer>
//             {
//                 (store) => {
//                     const addNewPost = () => {
//                         let action = addNewPostActionCreator();
//                         store.dispatch(action);
//                     }
//                     const handleChange = (newPost) => {
//                         store.dispatch(handleChangeActionCreator(newPost));
//                     }
//                     return (
//
//                         <MyPost addChangeText={handleChange} addPost={addNewPost} PostData={props.PostData}
//                                 newText={props.newText} post={'MY POSTS'}/>
//                     )
//                 }
//             }
//         </MyContext.Consumer>
//     )
//
// }
//
//
// export default MyPostContainer1

const mapStateToProps = (state) =>{
    return{
        state: state.postPage.PostData,
        newText:  state.postPage.newText,
        post:'MY POSTS'
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addChangeText: (newPost) =>{
            dispatch(handleChangeActionCreator(newPost));
        },

        addPost: () =>{
            let action = addNewPostActionCreator();
            dispatch(action);
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps) (MyPost);


export default MyPostContainer