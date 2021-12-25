import {useDispatch, useSelector} from "react-redux";
import {
    currentPageSelector, disableButtonSector,
    getUsersSelector, pageNumberSizesSelector,
    pageSizeSelector, setFilterSelector,
    totalUsersCountSelector
} from "../redux/users_selectors";
import {useHistory, useLocation} from "react-router";
import {useCallback, useEffect, useState} from "react";
import {ParsedUrlQuery} from "querystring";
import querystring from "querystring";
import {filterType, FollowThunkCreator, getUsersThunkCreator, unFollowThunkCreator} from "../redux/user_reducer";

type queryType = { term?: string; friend?: string; page?: string }
type parsedType = { term: string; friend: string; page: string }

export const useUsersContainer = (initState=1) => {
    const [pageNumber, setPageNumber] = useState(initState);
    const users = useSelector(getUsersSelector)
    const currentPage = useSelector(currentPageSelector)
    const totalUsersCount = useSelector(totalUsersCountSelector)
    const pageSize = useSelector(pageSizeSelector)
    const pageNumberSizes = useSelector(pageNumberSizesSelector)
    const filter = useSelector(setFilterSelector)
    const disableButton = useSelector(disableButtonSector)

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    let pageCount = Math.ceil((totalUsersCount/pageSize))
    let  pages:Array<number> = [];
    for (let i=1;  i <= pageCount; i++ ){
        pages.push(i);
    }
    const pageCountSize = Math.ceil(pageCount/pageNumberSizes); //   /10 = pageNumberSizes
    const leftPortionPageNumber = (pageNumber-1) * pageNumberSizes + 1;
    const rightPortionPageNumber = pageNumber * pageNumberSizes;
    const handlePagePlus = () => {setPageNumber(pageNumber + 1)}
    const handlePageMinus = () => {setPageNumber(pageNumber - 1)}
    const pagesData = pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)

    useEffect(() => {
        const parsed: ParsedUrlQuery = querystring.parse(location.search.substr(1))
        let actualPage = currentPage
        let actualFilter = filter
        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term:parsed.term  as string }
        if (!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null'? null : parsed.friend === 'true' ? true : false}

        dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter))
    }, [pageSize])

    useEffect(() => {
        const query: queryType ={}
        if (!! filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !==1 ) query.page = String(currentPage)
        history.push({
            pathname: '/user',
            search: querystring.stringify(query)
        })
    }, [filter, currentPage])

    const onChangePage = useCallback((pageNumber: number) => {
        dispatch(getUsersThunkCreator(pageNumber, pageSize, filter))
    },[pageSize, filter]);

    const onFilterChange = useCallback((filter: filterType)=> {
        dispatch(getUsersThunkCreator(1, pageSize, filter))
    },[pageSize, filter]);

    const follow = useCallback((userId: number) => {
        dispatch(follow(userId))
    },[dispatch]);

    const unfollow = useCallback((userId: number) => {
        dispatch(unfollow(userId))
    },[dispatch],);

    const unFollowThunk = useCallback( (userId: number) => {
        dispatch(unFollowThunkCreator(userId))
    },[unFollowThunkCreator]);


    const FollowThunk = useCallback((userId: number) => {
        dispatch(FollowThunkCreator(userId))
    },[FollowThunkCreator]);

    return {users, currentPage, pageSize, totalUsersCount, pageNumberSizes, disableButton,
        onChangePage, onFilterChange, unFollowThunk, FollowThunk, pageCountSize, handlePagePlus,
        handlePageMinus, pagesData, pageNumber }
}
