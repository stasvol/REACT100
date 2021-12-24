import {useDispatch, useSelector} from "react-redux";
import {
    currentPageSelector, disableButtonSector,
    getUsersSelector, pageNumberSizesSelector,
    pageSizeSelector, setFilterSelector,
    totalUsersCountSelector
} from "../redux/users_selectors";
import {useHistory, useLocation} from "react-router";
import {useEffect} from "react";
import {ParsedUrlQuery} from "querystring";
import querystring from "querystring";
import {filterType, FollowThunkCreator, getUsersThunkCreator, unFollowThunkCreator} from "../redux/user_reducer";

type queryType = { term?: string; friend?: string; page?: string }
type parsedType = { term: string; friend: string; page: string }

export const useUsersContainer = () => {
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

    useEffect(() => {
        const parsed: ParsedUrlQuery = querystring.parse(location.search.substr(1))
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term:parsed.term  as string }
        if (!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null'? null : parsed.friend === 'true' ? true : false}

        dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter))

    }, [])

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

    const onChangePage = (pageNumber: number) => {
        dispatch(getUsersThunkCreator(pageNumber, pageSize, filter))
    }

    const onFilterChange = (filter: filterType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter))

    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    const unFollowThunk = (userId: number) => {
        dispatch(unFollowThunkCreator(userId))
    }


    const FollowThunk = (userId: number) => {
        dispatch(FollowThunkCreator(userId))
    }
    return {users, currentPage, pageSize, totalUsersCount, pageNumberSizes, disableButton,
        onChangePage, onFilterChange, unFollowThunk, FollowThunk }
}