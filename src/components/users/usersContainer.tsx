import React from 'react';

import {useUsersContainer} from "../../hock/useUsersContainer";
import Paginator from "../pagination/paginator";
import User from "./user";
import UsersSearchForm from "./UsersSearchForm";



const UsersContainer: React.FC = () => {

const {users, currentPage, pageSize, totalUsersCount, pageNumberSizes, disableButton,
    onChangePage, onFilterChange, unFollowThunk, FollowThunk } =  useUsersContainer();

return (

        <>
            <UsersSearchForm onFilterChange={onFilterChange}/>
            <Paginator currentPage={currentPage} onChangePage={onChangePage} pageNumberSizes={pageNumberSizes}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>

            {users.map((user, i) =>
                    <User key={i} user={user}
                          disableButton={disableButton}
                          unFollowThunkCreator={unFollowThunk}
                          FollowThunkCreator={FollowThunk}
                    />
                )
            }
        </>
    )
}

export default UsersContainer;