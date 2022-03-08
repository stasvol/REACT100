import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { isAuthSelector, loginSelector } from '../redux/auth-selector';
import { loginOut } from '../redux/auth_reducer';

type PropsType = { isAuth: boolean; logOutUser: () => void; login: string };
export const useMyHeader = (): PropsType => {
  const isAuth = useSelector(isAuthSelector);
  const login = useSelector(loginSelector);
  const dispatch = useDispatch();

  const logOutUser = useCallback(() => {
    dispatch(loginOut());
  }, [dispatch]);

  return { isAuth, login, logOutUser };
};
