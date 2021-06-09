import React from 'react';
import {addChangeText, addPost} from '../../../redux/prof_reducer';
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {rootReducersType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";



// type mapStateProps = {
//     newText:string
// }
// type dispatchProps = {
//     addPost:(newText:string)=>void
// }
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

const mapStateToProps = (state:rootReducersType) =>{
    return{
        state: state.profPage.PostData,
        newText:  state.profPage.newText,
        post:'MY POSTS'
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return{
        addChangeText: (newPost:string,newText:string) =>{
            dispatch(addChangeText(newPost,newText));
        },

        addPost: (newText:string) =>{
            let action = addPost(newText);
            dispatch(action);
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps) (MyPost);


export default MyPostContainer