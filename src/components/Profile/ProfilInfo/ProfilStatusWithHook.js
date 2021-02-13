import React from "react";
import classes from './ProfilInfo.module.css';
import {useState,useEffect} from "react";




const  ProfilStatusHook = (props) =>{

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
    const changeStatus = (e) => {

        setStatus(e.target.value);
    }

        return (
            <div>
                {!editMode
                    ?
                    <div className={classes.status}>
                        <span onDoubleClick={activeEditMode} ><i>STATUS :</i>  {props.status} </span>
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