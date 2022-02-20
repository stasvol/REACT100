import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addChangeText, addPost, PostDataType } from '../../../redux/prof_reducer';
import MyPost from './myPost';

type MapStatePropsType = {
  newText: string;
  post: string;
  PostData: PostDataType;
};
type DispatchPropsType = {
  addPost: (newText: string) => void;
  addChangeText: (newPost: string, newText: string) => void;
};

const mapStateToProps = (state: {
  profPage: { PostData: PostDataType; newText: string };
  post: string;
}): MapStatePropsType => {
  return {
    PostData: state.profPage.PostData,
    newText: state.profPage.newText,
    post: 'MY POSTS',
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchPropsType => {
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
  // <MapStatePropsType, DispatchPropsTYpe, {}, RootReducersType>(
  mapStateToProps,
  mapDispatchToProps,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
)(MyPost);

export default MyPostContainer;
