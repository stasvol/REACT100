import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {rootReducersType} from "../../../redux/reduxStore";
import {addChangeText, addPost} from '../../../redux/prof_reducer';
import MyPost from "./myPost";

type mapStateProps = {
    newText:string
}
type dispatchProps = {
    addPost:(newText:string)=>void
}

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

const MyPostContainer = connect<mapStateProps, dispatchProps, {}, rootReducersType >(mapStateToProps,mapDispatchToProps) (MyPost);

export default MyPostContainer