import { Dispatch } from 'redux';
import { FormAction, stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';

import { RootReducersType } from './reduxStore';

import { profileApi } from '../api/api-profile';

const ADD_POST = 'ADD POST';
const ADD_CHANGE_TEXT = 'ADD CHANGE TEXT';
const SET_USERS_PROFILE = 'SET USERS PROFILE';
const SET_STATUS = 'SET STATUS';
const DELETE_POST = 'DELETE POST';
const SAVE_PHOTO_SUCCESS = 'SAVE PHOTO SUCCESS';

export type PostDataType = {
  id: number | string | undefined;
  like: number;
  message: string;
};
export type ProfileType = {
  userId?: number | string | null;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string | null;
  fullName?: string | null;
  contacts?: ContactsType;
  photos?: PhotosType;
  aboutMe?: string;
};
export type ContactsType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};
export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type ResponsePhotosType = {
  photos: PhotosType;
};

export type InitialStateProfType = typeof initialState;
type DispatchType = Dispatch<ActionCreatorProfType>;
// type GetStateType = () => RootReducersType;
type ThunkType = ThunkAction<Promise<void>, RootReducersType, unknown, ActionCreatorProfType>;

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

type ActionCreatorProfType =
  | AddPostActionType
  | AddChangeActionType
  | SetUsersProfileActionType
  | SetStatusActionType
  | DeletePostActionType
  | SavePhotoSuccessActionType;

type AddPostActionType = {
  type: typeof ADD_POST;
  newText: string;
};

type AddChangeActionType = {
  type: typeof ADD_CHANGE_TEXT;
  newPost: string;
  newText: string;
};

type SetUsersProfileActionType = {
  type: typeof SET_USERS_PROFILE;
  profile: ProfileType;
};

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};

type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};

let initialState = {
  PostData: [
    { id: 1, like: 20, message: 'Super' },
    { id: 2, like: 3, message: 'Kliovo' },
    { id: 3, like: 9, message: 'Class' },
  ] as Array<PostDataType>,

  newText: 'Hello',
  profile: null as ProfileType | null, //   {} as profileType,
  status: '',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const profReducer = (state = initialState, action: ActionCreatorProfType): InitialStateProfType => {
  let newPost;
  switch (action.type) {
    case ADD_POST:
      newPost = {
        id: 4,
        like: 0,
        message: action.newText,
      };
      return {
        ...state,
        PostData: [...state.PostData, newPost],
      };

    case ADD_CHANGE_TEXT:
      return {
        ...state,
        newText: action.newText,
      };

    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        PostData: state.PostData.filter(({ id }) => id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPost = (newText: string): AddPostActionType => ({ type: ADD_POST, newText });

export const addChangeText = (newPost: string, newText: string): AddChangeActionType => ({
  type: ADD_CHANGE_TEXT,
  newPost,
  newText,
});

export const setUsersProfile = (profile: ProfileType): SetUsersProfileActionType => ({
  type: SET_USERS_PROFILE,
  profile,
});

export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const profileThunkCreator = (
  userId: number | null | undefined,
): ThunkAction<Promise<void>, RootReducersType, unknown, ActionCreatorProfType> => {
  return async dispatch => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await profileApi.getProfile(userId);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    dispatch(setUsersProfile(data));
  };
};

export const getStatus = (userId: number | string): ((dispatch: DispatchType) => Promise<void>) => {
  return async (dispatch: DispatchType): Promise<void> => {
    const data = await profileApi.getStatus(userId);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    dispatch(setStatus(data));
  };
};

export const updateStatus = (status: string) => {
  return async (dispatch: DispatchType): Promise<void> => {
    const data = await profileApi.updateStatus(status);

    try {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }

      if (data.resultCode === 1) {
        throw new Error('Something went wrong.');
      }
    } catch (error) {
      throw new Error('Something went wrong !!!');
      // alert(`${error.name} : ${error.message} `)
    }
  };
};

export const savePhoto = (file: File): ThunkType => {
  return async (dispatch: DispatchType) => {
    const data = await profileApi.savePhoto(file);

    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  };
};

export const editProfile =
  (
    profile: ProfileType,
  ): ThunkAction<
  Promise<void>,
  RootReducersType,
  unknown,
  | AddPostActionType
  | AddChangeActionType
  | SetUsersProfileActionType
  | SetStatusActionType
  | DeletePostActionType
  | SavePhotoSuccessActionType
  | FormAction
  > =>
  // eslint-disable-next-line consistent-return
    async (dispatch, getState) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
      const userId = getState().auth?.id;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const response = await profileApi.editProfile(profile);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (response.data.resultCode === 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        dispatch(profileThunkCreator(userId));
      } else {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        dispatch(stopSubmit('editProfile', { _error: response.data.messages }));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return Promise.reject(response.data.messages);
      }
    };

export default profReducer;
