import React, { ChangeEvent, useState } from 'react';

import { ProfileType } from '../redux/prof_reducer';

type PropsType = {
  setEditMode: (value: ((prevState: boolean) => boolean) | boolean) => void;
  onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (formData: ProfileType) => void;
  editMode: boolean;
};

export const useProfInfo = (
  savePhoto: (file: File) => void,
  editProfile: (profile: ProfileType) => Promise<ProfileType>,
): PropsType => {
  const [editMode, setEditMode] = useState(false);
  const onPhotoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.length) savePhoto(e.target.files[0]);
  };
  const onSubmit = (formData: ProfileType): void => {
    editProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return { editMode, setEditMode, onPhotoChange, onSubmit };
};