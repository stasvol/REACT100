import { CurrentPageActionType, InitialStateUserType } from '../redux/user_reducer';
import { addAxios, GetUsersItemsType, ApiResponseType, ResultCodeEnum } from './api';

//               USERS

export const userApi = {
  getUserPage(
    currentPage: CurrentPageActionType | number,
    pageSize: InitialStateUserType,
    term = '',
    friend: boolean | null = null,
  ): Promise<any | ApiResponseType<Record<string, never>, ResultCodeEnum>> {
    return addAxios
      .get<GetUsersItemsType>(
      `users?page=${currentPage}&count=${pageSize}
      &term=${term}${friend === null ? '' : `&friend=${friend.toString()}`}`,
    )
      .then(response => response.data);
  },

  deleteUser(userId: number): Promise<ApiResponseType> {
    return addAxios.delete<ApiResponseType>(`follow/${userId}`).then(response => response.data); // as Promise <ResponseType>
  },

  postUser(userId: number): Promise<ApiResponseType> {
    return addAxios.post<ApiResponseType>(`follow/${userId}`, {}).then(response => response.data);
  },
};
