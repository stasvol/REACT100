export const isAuthSelector = (state: { auth: { isAuth: boolean } }): boolean => state.auth.isAuth;

export const loginSelector = (state: { auth: { login: string } }): string => state.auth.login;
