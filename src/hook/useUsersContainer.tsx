import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { useCallback, useEffect, useState } from 'react';
import querystring, { ParsedUrlQuery } from 'querystring';

import {
  currentPageSelector,
  disableButtonSector,
  getUsersSelector,
  pageNumberSizesSelector,
  pageSizeSelector,
  setFilterSelector,
  totalUsersCountSelector,
} from '../redux/users_selectors';
import {
  CurrentPageActionType,
  DisableButtonFolActionType,
  FilterType,
  FollowThunkCreator,
  getUsersThunkCreator,
  InitialStateUserType,
  TotalCountActionType,
  unFollowThunkCreator,
  UsersType,
} from '../redux/user_reducer';

type QueryType = { term?: string; friend?: string; page?: number };
type PropsType = {
  pageCountSize: number;
  pageNumber: number;
  handlePageMinus: () => void;
  pageSize: InitialStateUserType;
  onFilterChange: (filter: FilterType) => void;
  handlePagePlus: () => void;
  users: UsersType;
  disableButton: DisableButtonFolActionType;
  totalUsersCount: TotalCountActionType;
  pageNumberSizes: InitialStateUserType;
  onChangePage: (pageNumber: number) => void;
  currentPage: CurrentPageActionType;
  pagesData: number[];
  unFollowThunk: (userId: number) => void;
  FollowThunk: (userId: number) => void;
};

export const useUsersContainer = (initState = 1): PropsType => {
  const [pageNumber, setPageNumber] = useState(initState);
  const users = useSelector(getUsersSelector);
  const currentPage = useSelector(currentPageSelector);
  const totalUsersCount = useSelector(totalUsersCountSelector);
  const pageSize = useSelector(pageSizeSelector);
  const pageNumberSizes = useSelector(pageNumberSizesSelector);
  const filter = useSelector(setFilterSelector);
  const disableButton = useSelector(disableButtonSector);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const pageCount = Math.ceil(+totalUsersCount / +pageSize);
  const pages: Array<number> = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const pageCountSize = Math.ceil(+pageCount / +pageNumberSizes); //   /10 = pageNumberSizes
  const leftPortionPageNumber = (+pageNumber - 1) * +pageNumberSizes + 1;
  const rightPortionPageNumber = pageNumber * +pageNumberSizes;
  const handlePagePlus = (): void => {
    setPageNumber(pageNumber + 1);
  };
  const handlePageMinus = (): void => {
    setPageNumber(pageNumber - 1);
  };
  const pagesData = pages.filter(
    page => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
  );

  useEffect(() => {
    const parsed: ParsedUrlQuery = querystring.parse(location.search.substr(1));
    let actualPage: CurrentPageActionType | number = currentPage;
    let actualFilter = filter;
    if (parsed.page) actualPage = Number(parsed.page);
    if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };
    if (parsed.friend) {
      actualFilter = {
        ...actualFilter,
        friend: parsed.friend === 'null' ? null : parsed.friend === 'true',
      };
    }
    dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter));
  }, [currentPage, dispatch, filter, location.search, pageSize]);

  useEffect(() => {
    const query: QueryType = {};
    if (filter?.term) query.term = filter?.term;
    if (filter?.friend !== null) query.friend = String(filter?.friend);
    // if (currentPage !== 1) query.page = String(currentPage);
    history.push({
      pathname: '/user',
      search: querystring.stringify(query),
    });
  }, [filter, history]);

  const onChangePage = useCallback(
    (pageNumbers: number) => {
      dispatch(getUsersThunkCreator(pageNumbers, pageSize, filter));
    },
    [dispatch, filter, pageSize],
  );

  const onFilterChange = useCallback(
    (filters: FilterType) => {
      dispatch(getUsersThunkCreator(1, pageSize, filters));
    },
    [dispatch, pageSize],
  );

  const follow = useCallback(
    (userId: number) => {
      dispatch(follow(userId));
    },
    [dispatch],
  );

  const unfollow = useCallback(
    (userId: number) => {
      dispatch(unfollow(userId));
    },
    [dispatch],
  );

  const unFollowThunk = useCallback(
    (userId: number) => {
      dispatch(unFollowThunkCreator(userId));
    },
    [dispatch],
  );

  const FollowThunk = useCallback(
    (userId: number) => {
      dispatch(FollowThunkCreator(userId));
    },
    [dispatch],
  );

  return {
    users,
    currentPage,
    pageSize,
    totalUsersCount,
    pageNumberSizes,
    disableButton,
    onChangePage,
    onFilterChange,
    unFollowThunk,
    FollowThunk,
    pageCountSize,
    handlePagePlus,
    handlePageMinus,
    pagesData,
    pageNumber,
  };
};
