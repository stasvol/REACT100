// import React from 'react';
// import classes from './MyPost.module.css';
// import Post from "./Post/Post";
// import {addNewPostActionCreator, handleChangeActionCreator} from '../../../redux/post_reducer';
// import MyPost from "./MyPost";
// // import MyContext from "../../../MyContext";
// import {connect} from "react-redux";
// import Profile from "./Profile";
// import MyPostContainer from "./MyPosts/MyPostContainer";
//
//
//
// const mapStateToProps = (state) =>{
//
//     return{
//         state: state.postPage.PostData,
//         newText:  state.postPage.newText,
//         post:'MY POSTS'
//     }
// }
//
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         addChangeText: (newPost) =>{
//             dispatch(handleChangeActionCreator(newPost));
//         },
//
//         addPost: () =>{
//             let action = addNewPostActionCreator();
//             dispatch(action);
//         }
//     }
// }
//
// const ProfileContainer = connect(mapStateToProps,mapDispatchToProps) (Profile);
//
//
// export default ProfileContainer