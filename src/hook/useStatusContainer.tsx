import { ChangeEvent, useEffect, useState } from 'react';

export type UseStatusContainerType = {
  status: string;
  updateStatus: (status: string) => void;
  editMode: boolean;
  statusNew: string;
  activeEditMode: () => void;
  deActiveEditMode: () => void;
  changeStatus: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const useStatusContainer = (
  status: string,
  updateStatus: (status: string) => void,
): UseStatusContainerType => {
  const [editMode, setEditMode] = useState(false);
  const [statusNew, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activeEditMode = (): void => {
    setEditMode(true);
  };
  const deActiveEditMode = (): void => {
    setEditMode(false);

    updateStatus(statusNew);
  };
  const changeStatus = (e: ChangeEvent<HTMLInputElement>): void => {
    setStatus(e.target.value);
  };

  return {
    status,
    updateStatus,
    editMode,
    statusNew,
    activeEditMode,
    deActiveEditMode,
    changeStatus,
  };
};
