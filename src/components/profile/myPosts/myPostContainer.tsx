// import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// import { RootReducersType } from '../../../redux/reduxStore';
import { addChangeText, addPost, PostDataType } from '../../../redux/prof_reducer';
import MyPost from './myPost';

// type MapStateProps = {
//   newText: string;
// };
// type DispatchProps = {
//   addPost: (newText: string) => void;
// };

const mapStateToProps = (state: {
  profPage: { PostData: PostDataType; newText: string };
  post: string;
}): { post: string; newText: string; PostData: PostDataType } => {
  return {
    PostData: state.profPage.PostData,
    newText: state.profPage.newText,
    post: 'MY POSTS',
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
): {
    addChangeText: (newPost: string, newText: string) => void;
    addPost: (newText: string) => void;
  } => {
  return {
    addChangeText: (newPost: string, newText: string) => {
      dispatch(addChangeText(newPost, newText));
    },

    addPost: (newText: string) => {
      const action = addPost(newText);
      dispatch(action);
    },
  };
};

const MyPostContainer = connect(
  // <MapStateProps, DispatchProps, {}, RootReducersType>(
  mapStateToProps,
  mapDispatchToProps,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(MyPost);

export default MyPostContainer;
