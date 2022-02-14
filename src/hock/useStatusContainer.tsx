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
export const useStatusContainer = (status: string, updateStatus: (status: string) => void) => {
  // { status, updateStatus,
  // }: { status: string, updateStatus: (status: string) => void }): {
  //   editMode: boolean;
  //   statusNew: string;
  //   activeEditMode: () => void;
  //   deActiveEditMode: () => void;
  //   changeStatus: (e: ChangeEvent<HTMLInputElement>) => void;
  // } => {
  // eslint-disable-next-line no-debugger
  // debugger;
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

  return { editMode, statusNew, activeEditMode, deActiveEditMode, changeStatus };
};
