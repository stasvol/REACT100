import React from 'react';
import { useSelector } from 'react-redux';

import Preloader from '../common/preloader/preloader';
import { isLoadingSelector } from '../../selectors/users_selectors';
import UsersContainer from './usersContainer';
import { TogglePreloaderActionType } from '../../redux/user_reducer';

const UsersComponent: React.FC = () => {
  const isLoading: TogglePreloaderActionType = useSelector(isLoadingSelector);
  return (
    <>
      {isLoading ? <Preloader /> : null}
      <UsersContainer />
    </>
  );
};

export default React.memo(UsersComponent);
