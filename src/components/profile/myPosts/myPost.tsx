import React from 'react';

import { PostDataType } from '../../../redux/prof_reducer';
import Post from './post/post';
import MyPostForm, { PropsPostFormType } from './myPostForm';

import classes from './myPost.module.css';

type PropsType = {
  PostData: Array<PostDataType>;
  addPost: (newText: string) => void;
  post: string;
};

const MyPost: React.FC<PropsType> = ({ PostData, addPost, post }) => {
  // // eslint-disable-next-line no-debugger
  // debugger;
  const onSubmit = (values: PropsPostFormType): void => {
    addPost(values.newText);
    values.newText = '';
  };

  return (
    <div className={classes.posts}>
      <h4 className={classes.head}>{post}</h4>

      <MyPostForm onSubmit={onSubmit} />
      {PostData.map(({ like, message, id }) => (
        <Post key={id} id={id} like={like} message={message} />
      ))}
    </div>
  );
};

export default React.memo(MyPost);
