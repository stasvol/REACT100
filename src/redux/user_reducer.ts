import React from 'react';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { userApi } from '../api/api-users';
import { PhotosType } from './prof_reducer';
import { BaseThunkType, RootReducersType } from './reduxStore';
import { ApiResponseType } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';
const SET_CURRENT_PAGE = 'SET CURRENT PAGE';
const SET_TOTAL_COUNT = 'SET TOTAL COUNT';
const TOGGLE_PRELOADER = 'TOGGLE PRELOADER';
const DISABLE_BUTTON_FOL = 'DISABLE BUTTON FOL';
const DELETE_USER = 'DELETE USER';
const SET_FILTER = 'SET FILTER';

export type UsersType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
  map(element: (user: UsersType) => React.ReactElement): any;
};

export type DisableButtonType = {
  disableButton?: boolean | number;
  // some(param: (userId: number) => boolean):any;
};

export type ActionCreatorUsersType =
  | FollowActionType
  | UnfollowActionType
  | UsersActionType
  | CurrentPageActionType
  | TotalCountActionType
  | TogglePreloaderActionType
  | DisableButtonFolActionType
  | DeleteUsersActionType
  | SetFilterType;

type FollowActionType = {
  type: typeof FOLLOW;
  userId: number;
};

export const initialState = {
  users: [] as Array<UsersType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
  pageNumberSizes: 10,
  disableButton: [] as DisableButtonType[], // array userId
  filter: {
    term: '',
    friend: null as null | boolean,
  },
};

export type InitialStateUserType = typeof initialState;
export type FilterType = typeof initialState.filter;

export type UnfollowActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};

export type UsersActionType = {
  type: typeof SET_USERS;
  users: UsersType;
};

export type CurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage?: CurrentPageActionType | number;
};

export type SetFilterType = {
  friend: null | boolean;
  term: string;
  type: typeof SET_FILTER;
  // payload: {
  //   term: string;
  //   friend: null | boolean;
  // };
};

type SetFilterPropsType = { type: string; payload: { term: string; friend: boolean | null } };

export type TotalCountActionType = {
  type: typeof SET_TOTAL_COUNT;
  totalCount?: number;
};

export type TogglePreloaderActionType = {
  type: typeof TOGGLE_PRELOADER;
  isLoading: boolean;
};

export type DisableButtonFolActionType = {
  type: typeof DISABLE_BUTTON_FOL;
  disableButton: boolean | number;
  userId: number;
};

export type DeleteUsersActionType = {
  type: typeof DELETE_USER;
  userId: number;
};

type DispatchType = Dispatch<ActionCreatorUsersType>;
// type GetStateType = () => rootReducersType;
type ThunkType = ThunkAction<Promise<void>, RootReducersType, unknown, ActionCreatorUsersType>;

const userReducer = (
  state = initialState,
  action: AnyAction,
): InitialStateUserType | ActionCreatorUsersType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users]
        // users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
        users: state.users.map(
          user => (user.id === action.userId ? { ...user, followed: true } : user),
          // if (user.id === action.userId) {
          //   return { ...user, followed: true };
          // }
          // return user;
        ),
      };

    case UNFOLLOW:
      return {
        ...state,
        // users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
        users: state.users.map(
          user => (user.id === action.userId ? { ...user, followed: false } : user),
          // if (user.id === action.userId) {
          //   return { ...user, followed: false };
          // }
          // return user;
        ),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    case TOGGLE_PRELOADER:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case DISABLE_BUTTON_FOL:
      return {
        ...state,
        disableButton: action.disableButton
          ? [...state.disableButton, action.userId]
          : state.disableButton.filter(id => id !== action.userId),
      };

    case DELETE_USER:
      return {
        ...state,
        users: [...state.users].filter(u => u.id !== action.userId),
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export const follow = (userId: number): FollowActionType => ({ type: FOLLOW, userId });

export const unfollow = (userId: number): UnfollowActionType => ({ type: UNFOLLOW, userId });

export const setUsers = (users: UsersType): UsersActionType => ({ type: SET_USERS, users });

export const setCurrentPage = (
  currentPage: CurrentPageActionType | number,
): CurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setFilter = (filter: FilterType): SetFilterPropsType => ({
  type: SET_FILTER,
  payload: filter,
});

export const setTotalUsersCount = (totalCount: number): TotalCountActionType => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const togglePreloader = (isLoading: boolean): TogglePreloaderActionType => ({
  type: TOGGLE_PRELOADER,
  isLoading,
});

export const disableButtonFol = (
  disableButton: boolean | number,
  userId: number,
): DisableButtonFolActionType => ({ type: DISABLE_BUTTON_FOL, disableButton, userId });

export const deleteUsers = (userId: number): DeleteUsersActionType => ({
  type: DELETE_USER,
  userId,
});

export const getUsersThunkCreator = (
  currentPage: CurrentPageActionType | number,
  pageSize: InitialStateUserType,
  filter: FilterType,
): BaseThunkType<any> | FilterType => {
  return async dispatch => {
    dispatch(togglePreloader(true));
    dispatch(setCurrentPage(currentPage));
    dispatch(setFilter(filter));
    const data = await userApi.getUserPage(currentPage, pageSize, filter?.term, filter?.friend);
    dispatch(togglePreloader(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data?.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  ApiMethod: (userId: number) => Promise<ApiResponseType>,
  ActionCreator: (userId: number) => FollowActionType | UnfollowActionType,
): Promise<void> => {
  dispatch(disableButtonFol(true, userId));
  const data = await ApiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(ActionCreator(userId));
  }
  dispatch(disableButtonFol(false, userId));
};

export const FollowThunkCreator = (userId: number): ThunkType => {
  return async dispatch => {
    await followUnfollowFlow(dispatch, userId, userApi.postUser.bind(userId), follow);
  };
};

export const unFollowThunkCreator = (userId: number): ThunkType => {
  return async dispatch => {
    const ApiMethod = userApi.deleteUser.bind(userId);
    const ActionCreator = unfollow;
    await followUnfollowFlow(dispatch, userId, ApiMethod, ActionCreator);
  };
};

export default userReducer;
