import React from 'react';

// eslint-disable-next-line import/namespace,import/named
import { useStatusContainer } from '../../../hock/useStatusContainer';

import classes from './profilInfo.module.css';

export interface ProfileStatusHookType {
  status: string;
  updateStatus: (status: string) => void;
}

const StatusContainer: React.FC<ProfileStatusHookType> = ({ status, updateStatus }) => {
  // eslint-disable-next-line no-debugger
  // debugger;
  const { editMode, statusNew, activeEditMode, deActiveEditMode, changeStatus } =
    useStatusContainer(status, updateStatus);

  return (
    <div>
      {!editMode ? (
        <div className={classes.status}>
          <span onDoubleClick={activeEditMode}>
            <i>Status :</i> {statusNew}{' '}
          </span>
        </div>
      ) : (
        <div className={classes.status}>
          <input onBlur={deActiveEditMode} onChange={changeStatus} type="text" value={statusNew} />
        </div>
      )}
    </div>
  );
};

export default StatusContainer;
