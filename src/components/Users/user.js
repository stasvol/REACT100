import React from "react";
import classes from './user.module.css';

const Users = (props) =>{

   if (props.users.length === 0 ) {

       props.setUsers([
               {
                   id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3424.jpg',
                   followed: true, fullName: 'Anna', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kiev'}
               },
               {
                   id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg',
                   followed: false, fullName: 'Ivan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Lvov'}
               },
               {
                   id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3426.jpg',
                   followed: false, fullName: 'Vovan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}
               },
               {
                   id: 4,
                   photoUrl: 'https://2ch.hk/sex/thumb/6329995/15866325175470s.jpg',
                   followed: true, fullName: 'Sweta ',status: 'I am a boss',location: {country: 'Ukraine', city: 'Rivne'}
               }
       ]);
   }

    return (
        <div>
            {
                props.users.map(user=> <div key={user.id}>
                    <div>
                        <img src={user.photoUrl} className={classes.photo}/>
                    </div>
                    <div>
                        { user.followed
                            ?  <button onClick={() =>{props.unfollow(user.id)}}>UnFollow</button>
                            :  <button onClick={() =>{props.follow(user.id)}}>Follow</button>
                        }
                    </div>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>

                </div>)
            }
        </div>
    )

}
export default Users
