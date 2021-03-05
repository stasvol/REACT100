import React from 'react'
import {connect} from "react-redux";
import classes from  './Setting.module.css';


const SettingUsers = (props) => {


    // (function () {
    if (!props.users) {
               props.settingUser(
            [
                {
                    id: 1, photoUrl: "https://i.pinimg.com/originals/53/08/1c/53081c48b54b7be2805a0b2ad5470735.jpg",
                    followed: true, fullName: 'Andre', status: "I'm  Cool"
                },
                {
                    id: 2, photoUrl: "https://i.pinimg.com/originals/b4/98/f9/b498f91f653cd9ed231209b12fac64c7.jpg",
                    followed: false, fullName: 'Tom', status: "I'm  authorised"
                }
            ],
        )()
    }
    // })()
    const addSetingUser = props.users.users.map(user => {

     return       <div key={user.id}>
                <div>
                    <img className={classes.foto} src={user.photoUrl} alt={'photo'}/>
                </div>
                <div>
                    <span><b>{user.fullName}</b></span>
                </div>
                <div>
                    <span>status: <i>{user.status}</i></span>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={()=>{props.setUnFollow(user.id)}}>unFollow</button>
                        : <button onClick={()=>{props.setFollow(user.id)}}>Follow</button>
                    }

                </div>
            </div>

    })

    return (
        <div>

            <h3>USERS</h3>

            {addSetingUser}
        </div>
    )

}


 export default  SettingUsers
