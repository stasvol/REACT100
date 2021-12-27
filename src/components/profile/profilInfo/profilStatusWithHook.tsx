import React, {ChangeEvent,useState,useEffect} from "react";

import classes from './profilInfo.module.css';

interface profileStatusHookType{
    status:string,
    updateStatus:(status:string)=>void,

}


const  ProfilStatusHook:React.FC<profileStatusHookType> = (props) =>{

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {

        setStatus(props.status)
    },[props.status]);

    const activeEditMode = () => {

        setEditMode(true);

    }


    const deActiveEditMode = () => {

         setEditMode(false);

        props.updateStatus(status)

    }
    const changeStatus = (e:ChangeEvent<HTMLInputElement>) => {

        setStatus(e.target.value);
    }

        return (
            <div>
                {!editMode
                    ?
                    <div className={classes.status}>
                        <span onDoubleClick={activeEditMode} ><i>Status :</i>  {props.status} </span>
                    </div>

                    :
                        <div className={classes.status}>
                            <input  onChange={changeStatus}  onBlur={deActiveEditMode} type={'text'} value={status} />
                        </div>
                }
            </div>
        )

}


export default ProfilStatusHook