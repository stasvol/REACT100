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
// type ParsedType = { term: string; friend: string; page: string };

export const useUsersContainer = (
  initState = 1,
): {
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
  } => {
  // eslint-disable-next-line no-debugger
  // debugger;
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const pageCount = Math.ceil(totalUsersCount / pageSize);
  const pages: Array<number> = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const pageCountSize = Math.ceil(pageCount / pageNumberSizes); //   /10 = pageNumberSizes
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const leftPortionPageNumber = (pageNumber - 1) * pageNumberSizes + 1;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const rightPortionPageNumber = pageNumber * pageNumberSizes;
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
  }, [filter, currentPage, history]);

  const onChangePage = useCallback(
    (pageNumbers: number) => {
      dispatch(getUsersThunkCreator(pageNumbers, pageSize, filter));
    },
    [dispatch, pageSize, filter],
  );

  const onFilterChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (filter: FilterType) => {
      dispatch(getUsersThunkCreator(1, pageSize, filter));
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

// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useLocation } from 'react-router';
// import { useCallback, useEffect, useState } from 'react';
// import querystring, { ParsedUrlQuery } from 'querystring';
//
// import {
//   currentPageSelector, disableButtonSector,
//   getUsersSelector, pageNumberSizesSelector,
//   pageSizeSelector, setFilterSelector,
//   totalUsersCountSelector,
// } from '../redux/users_selectors';
// import {
//   CurrentPageActionType,
//   FilterType,
//   FollowThunkCreator,
//   getUsersThunkCreator,
//   unFollowThunkCreator,
// }
//   from '../redux/user_reducer';
//
// type QueryType = { term?: string; friend?: string; page?: string };
// // type ParsedType = { term: string; friend: string; page: string };
//
// export const useUsersContainer = (initState = 1) => {
//   // eslint-disable-next-line no-debugger
//   debugger;
//   const [pageNumber, setPageNumber] = useState(initState);
//   const users = useSelector(getUsersSelector);
//   const currentPage = useSelector(currentPageSelector);
//   const totalUsersCount = useSelector(totalUsersCountSelector);
//   const pageSize = useSelector(pageSizeSelector);
//   const pageNumberSizes = useSelector(pageNumberSizesSelector);
//   const filter = useSelector(setFilterSelector);
//   const disableButton = useSelector(disableButtonSector);
//
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const location = useLocation();
//
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   const pageCount = Math.ceil((totalUsersCount / pageSize));
//   const pages:Array<number> = [];
//   for (let i = 1; i <= pageCount; i++) {
//     pages.push(i);
//   }
//
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   const pageCountSize = Math.ceil(pageCount / pageNumberSizes); //   /10 = pageNumberSizes
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   const leftPortionPageNumber = (pageNumber - 1) * pageNumberSizes + 1;
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   const rightPortionPageNumber = pageNumber * pageNumberSizes;
//   const handlePagePlus = () => { setPageNumber(pageNumber + 1); };
//   const handlePageMinus = () => { setPageNumber(pageNumber - 1); };
//   const pagesData = pages
//     .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber);
//
//   useEffect(() => {
//     const parsed: ParsedUrlQuery = querystring.parse(location.search.substr(1));
//     let actualPage:number | CurrentPageActionType = currentPage;
//     let actualFilter = filter;
//     if (parsed.page) actualPage = Number(parsed.page);
//     if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };
//     if (parsed.friend) {
//       actualFilter =
//      { ...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' };
//     }
//
//     dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter));
//   }, [currentPage, dispatch, filter, location.search, pageSize]);
//
//   useEffect(() => {
//     const query: QueryType = {};
//     if (filter?.term) query.term = filter?.term;
//     if (filter?.friend !== null) query.friend = String(filter?.friend);
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     if (currentPage !== 1) query.page = String(currentPage);
//     history.push({
//       pathname: '/user',
//       search: querystring.stringify(query),
//     });
//   }, [filter, currentPage, history]);
//
//   // eslint-disable-next-line @typescript-eslint/no-shadow
//   const onChangePage = useCallback((pageNumber: number) => {
//     dispatch(getUsersThunkCreator(pageNumber, pageSize, filter));
//   }, [dispatch, pageSize, filter]);
//
//   // eslint-disable-next-line @typescript-eslint/no-shadow
//   const onFilterChange = useCallback((filter: FilterType) => {
//     dispatch(getUsersThunkCreator(1, pageSize, filter));
//   }, [dispatch, pageSize]);
//
//   const follow = useCallback((userId: number) => {
//     dispatch(follow(userId));
//   }, [dispatch]);
//
//   const unfollow = useCallback((userId: number) => {
//     dispatch(unfollow(userId));
//   }, [dispatch]);
//
//   const unFollowThunk = useCallback((userId: number) => {
//     dispatch(unFollowThunkCreator(userId));
//   }, [dispatch]);
//
//   const FollowThunk = useCallback((userId: number) => {
//     dispatch(FollowThunkCreator(userId));
//   }, [dispatch]);
//
//   return { users,
//     currentPage,
//     pageSize,
//     totalUsersCount,
//     pageNumberSizes,
//     disableButton,
//     onChangePage,
//     onFilterChange,
//     unFollowThunk,
//     FollowThunk,
//     pageCountSize,
//     handlePagePlus,
//     handlePageMinus,
//     pagesData,
//     pageNumber };
// };
