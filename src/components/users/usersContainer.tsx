import React from 'react';

import { useUsersContainer } from '../../hock/useUsersContainer';
import Paginator from '../pagination/paginator';
import User from './user';
import UsersSearchForm from './usersSearchForm';

const UsersContainer: React.FC = () => {
  const {
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
  } = useUsersContainer();
  return (
    <>
      <UsersSearchForm onFilterChange={onFilterChange} />
      <Paginator
        currentPage={currentPage}
        onChangePage={onChangePage}
        pageNumberSizes={pageNumberSizes}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
      />

      {users.map(user => (
        <User
          key={`${user.id}`}
          disableButton={[disableButton]}
          FollowThunkCreator={FollowThunk}
          unFollowThunkCreator={unFollowThunk}
          user={user}
        />
      ))}
    </>
  );
};

export default UsersContainer;
