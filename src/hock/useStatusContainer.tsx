import {ChangeEvent, useEffect, useState} from "react";

export const useStatusContainer = (status:string,updateStatus:(status:string)=>void) => {

    const [editMode, setEditMode] = useState(false);
    const [statusNew, setStatus] = useState(status);

    useEffect(() => {

        setStatus(status)
    },[status]);

    const activeEditMode = () => {

        setEditMode(true);

    }
    const deActiveEditMode = () => {

        setEditMode(false);

        updateStatus(statusNew)

    }
    const changeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    }

    return {editMode, statusNew, activeEditMode, deActiveEditMode,changeStatus}
}