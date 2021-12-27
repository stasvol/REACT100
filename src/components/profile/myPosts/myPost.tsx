import React from 'react';

import {PostDataType} from "../../../redux/prof_reducer";
import Post from "./post/post";
import MyPostForm, {propsPostFormType} from "./myPostForm";

import classes from './myPost.module.css';

type propsType = {
    PostData: Array<PostDataType>,
    addPost: (newText: string) => void,
    post: string,
}

const MyPost: React.FC<propsType> = ({PostData,addPost,post}) => {

    const onSubmit = (values: propsPostFormType) => {
        addPost(values.newText)
        values.newText = ''
    }

    return (
        <div className={classes.posts}>
            <h4 className={classes.head}>{post}</h4>

            <MyPostForm onSubmit={onSubmit}/>
            {PostData
                .map(({like,message,id}) =>
                    <Post like={like} message={message} id={id} key={id}/>)
            }

        </div>
    )
}

export default React.memo(MyPost);
