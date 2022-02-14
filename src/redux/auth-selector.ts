export const isAuthSelector = (auth: { isAuth: boolean }): boolean => auth.isAuth;

export const loginSelector = (auth: { login: string }): string => auth.login;
