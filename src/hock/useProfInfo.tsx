import React, {ChangeEvent, useState} from "react";

import {profileType} from "../redux/prof_reducer";

export const useProfInfo = (savePhoto:(file: File)=> void, editProfile:(profile:profileType)=>Promise<profileType>) => {

    const [editMode, setEditMode] = useState(false);

    const onPhotoChange = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData:profileType) => {
        editProfile(formData).then(
            () =>{
                setEditMode(false);
            }
        )
    }
    return {editMode, setEditMode, onPhotoChange, onSubmit}
}