import { ThunkAction } from 'redux-thunk';

import { authThunkCreator } from './auth_reducer';
import { RootReducersType } from './reduxStore';

const INITIALISED_SUCCESS = 'INITIALISED SUCCESS';

export type InitialStateAppType = {
  initialized: boolean;
};

export type InitializedSuccessActionType = {
  type: typeof INITIALISED_SUCCESS;
};
export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALISED_SUCCESS,
});
type ThunkType = ThunkAction<
Promise<void>,
RootReducersType,
unknown,
InitializedSuccessActionType
>;

const initialState = {
  initialized: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const appReducer = (
  state = initialState,
  action: InitializedSuccessActionType,
): InitialStateAppType => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializeApp = (): ThunkType => async dispatch => {
  const promise = dispatch(authThunkCreator());
  await Promise.all([promise]);
  dispatch(initializedSuccess());
};

export default appReducer;
