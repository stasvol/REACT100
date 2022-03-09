import {
  CurrentPageActionType,
  DisableButtonFolActionType,
  InitialStateUserType,
  SetFilterType,
  TogglePreloaderActionType,
  TotalCountActionType,
  UsersType,
} from '../redux/user_reducer';

export const getUsersSelector = (state: { usersPage: { users: UsersType } }): UsersType =>
  state.usersPage.users;

export const pageSizeSelector = (state: {
  usersPage: { pageSize: InitialStateUserType };
}): InitialStateUserType => state.usersPage.pageSize;

export const totalUsersCountSelector = (state: {
  usersPage: { totalUsersCount: TotalCountActionType };
}): TotalCountActionType => state.usersPage.totalUsersCount;

export const currentPageSelector = (state: {
  usersPage: { currentPage: CurrentPageActionType };
}): CurrentPageActionType => state.usersPage.currentPage;

export const isLoadingSelector = (state: {
  usersPage: { isLoading: TogglePreloaderActionType };
}): TogglePreloaderActionType => state.usersPage.isLoading;

export const disableButtonSector = (state: {
  usersPage: { disableButton: DisableButtonFolActionType };
}): DisableButtonFolActionType => state.usersPage.disableButton;

export const pageNumberSizesSelector = (state: {
  usersPage: { pageNumberSizes: InitialStateUserType };
}): InitialStateUserType => state.usersPage.pageNumberSizes;

export const setFilterSelector = (state: { usersPage: { filter: SetFilterType } }): SetFilterType =>
  state.usersPage.filter;
