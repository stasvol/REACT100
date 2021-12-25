import {useCallback} from "react";
import {useSelector} from "react-redux";

import {setFilterSelector} from "../redux/users_selectors";
import {filterType} from "../redux/user_reducer";
import {useUsersContainer} from "./useUsersContainer";


export type Friend = 'true'|'false'|'null'
type formType ={
    term:string,
    friend: Friend
}
export const useSearchForm = () => {
    const filter = useSelector(setFilterSelector)
    const {onFilterChange} = useUsersContainer()

    const submit = useCallback((values:formType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean)=>void }) => {
        const filter:filterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        onFilterChange(filter)
        setSubmitting(false);
    },[filter]);

    return {filter, submit }
}