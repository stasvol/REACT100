import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginSelector } from '../redux/auth-selector';
import { loginOut } from '../redux/auth_reducer';

export const useMyHeader = (): { isAuth: boolean; logOutUser: () => void; login: string } => {
  const isAuth = useSelector((state: { auth: { isAuth: boolean } }) => state.auth.isAuth);
  const login = useSelector(loginSelector);
  const dispatch = useDispatch();

  const logOutUser = useCallback(() => {
    dispatch(loginOut());
  }, [dispatch]);

  return { isAuth, login, logOutUser };
};
