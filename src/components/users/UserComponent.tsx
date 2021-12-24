import React from 'react';
import {useSelector} from 'react-redux';

import Preloader from "../common/preloader/preloader";
import {isLoadingSelector} from "../../redux/users_selectors";
import UsersContainer from "./usersContainer";

const UsersComponent: React.FC = () => {
    const isLoading:boolean = useSelector(isLoadingSelector)
    return (
        <>
            {isLoading ? <Preloader/> : null}
            <UsersContainer/>
        </>
    )

}

export default React.memo(UsersComponent);