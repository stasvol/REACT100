import React from "react";

import {useStatusContainer} from "../../../hock/useStatusContainer";

import classes from './profilInfo.module.css';


export interface profileStatusHookType{
    status:string,
    updateStatus:(status:string)=>void,
}

const  StatusContainer:React.FC<profileStatusHookType> = ({status,updateStatus}) =>{
    const {editMode, statusNew, activeEditMode, deActiveEditMode,changeStatus} = useStatusContainer(status,updateStatus)

    return (
            <div>
                {!editMode
                    ?
                    <div className={classes.status}>
                        <span onDoubleClick={activeEditMode} ><i>Status :</i>  {status} </span>
                    </div>

                    :
                        <div className={classes.status}>
                            <input  onChange={changeStatus}  onBlur={deActiveEditMode} type={'text'} value={statusNew} />
                        </div>
                }
            </div>
        )

}

export default StatusContainer