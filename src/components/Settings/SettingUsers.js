import React from 'react'
import classes from './Setting.module.css';
import  axios from "axios";
import Photo from './../../Photo/Images/avatar.png'


class SettingUsers extends React.Component {

      componentDidMount() {
          if (this.props.users.users.length === 0) {
              // (function () {
              axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(response => {

                  this.props.settingAddUser(response.data.items)

              })
          }

      }

    // const setAddUserButton = ()=> {

        // }
        // if (props.users.users.length === 0) {
        //
        //     props.settingAddUser([
        //             {
        //                 id: 1, photoUrl: "https://i.pinimg.com/originals/53/08/1c/53081c48b54b7be2805a0b2ad5470735.jpg",
        //                 followed: true, name: 'Andre', status: "I'm  Cool"
        //             },
        //             {
        //                 id: 2, photoUrl: "https://i.pinimg.com/originals/b4/98/f9/b498f91f653cd9ed231209b12fac64c7.jpg",
        //                 followed: false, name: 'Tom', status: "I'm  authorised"
        //             },
        //         ]
        //     )
        // }
        // })()
    render() {

        const addSetingUser = this.props.users.users.map((user, i) => {

        return <div key={i}>
                <div>
                    <img className={classes.foto} src={user.photos.small ? user.photos.small : Photo} alt={'photo'}/>
                </div>
                <div>
                    <span><b>{user.name}</b></span>
                    <div>{new Date().toLocaleDateString()}</div>
                </div>
                <div>
                    <span>status: <i>{user.status}</i></span>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            this.props.setUnFollow(user.id)
                        }}>unFollow</button>
                        : <button onClick={() => {
                            this.props.setFollow(user.id)
                        }}>Follow</button>
                    }

                </div>
            </div>

        })


        return (
            <div>
                 <div className={classes.marg}>
                         <span className={`${classes.pag} ${classes.active}`}>1</span>
                         <span className={classes.pag}>2</span>
                         <span className={classes.pag}>3</span>
                         <span className={classes.pag}>4</span>
                         <span className={classes.pag}>5</span>
                 </div>
                {/*<button onClick={setAddUserButton}>ADD USERS</button>*/}
                <h3>USERS</h3>

                {addSetingUser}
            </div>
        )

    }
}


export default  SettingUsers
