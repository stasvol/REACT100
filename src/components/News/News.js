import React, {useState} from 'react';
import classes from './News.module.css';
import kot from './../../Photo/Images/kot.png'
import photo from "../../Photo/Images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {newDelUnfollow, newPostFollow} from "../Settings/SetApiAxios";
import {setFollowThunk} from "../Settings/Set_reducers/setUserReducer";
import userGirl from './../../Photo/Images/user2.png'
import NewsStatus from "./newsStatus";
import ContactNewForm from "./ContactNewForm"

const News = ({...props}) => {

    const [editMod, setEditMod] = useState(false)

    const onCurPageSet = (currentPageSet) => {
        props.SetCurPage(currentPageSet)
    }

    const countPagesSet = Math.ceil((props.countUsersSet / props.pageSizeSet) / 150)
    const pagesSet = []
    for (let i = 1; i <= countPagesSet; i++)
        pagesSet.push(i)

    const addPhoto = (e) => {

        if (e.target.files.length) {
            props.showPhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveContacts(formData)
        setEditMod(false)
       console.log(formData)
    }


    return (

        <div className={''}>

            {props.isSetAuth ? props.login : <NavLink to={'/Login'}>
                <button>LOGIN</button>
            </NavLink>}


            {
                pagesSet.map((p, i) => {
                        return <span onClick={(e) => {
                            onCurPageSet(p)
                        }} key={i}
                                     className={props.currentPageSet === p ? classes.active : classes.pag}>{p}</span>

                    }
                )
            }


            <h3>News about Users</h3>

            <div>
                <span><b>STATUS :</b></span>
                <NewsStatus status={props.status} newPutStatusThunk={props.newPutStatusThunk}/>
            </div>

            <br/>
            {props.isOwnerNew &&
            <input type={'file'} onChange={addPhoto}/>
            }

            {

                props.users.map((u, i) => {
                    return <div key={i}>
                        <div>
                            {/*<NavLink to={'/Profile/'+u.id}>*/}
                            <img className={classes.kot} src={u.photos.small ? u.photos.small : kot} alt={'image'}/>
                            {/*</NavLink>*/}
                            <img src={props.prof.photos.small || userGirl} alt="image" className={classes.kot}/>
                        </div>
                        {
                            u.followed

                                ? <button disabled={props.setDisableBut.some(id => id === u.id)} onClick={() => {
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    //     {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
                                    //     }
                                    // props.setLoadDisableBut(true,u.id)
                                    //     newDelUnfollow(u.id)
                                    //
                                    //     .then(response => {
                                    //
                                    //         if (response.data.resultCode===0){
                                    //             props.setUnFollow(u.id)
                                    //         }
                                    //         props.setLoadDisableBut(false,u.id)
                                    //     })
                                    props.setUnfollowThunk(u.id)
                                }}>Unfollow</button>

                                : <button disabled={props.setDisableBut.some(id => id === u.id)} onClick={() => {
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                    //     {
                                    //         withCredentials: true,
                                    //         headers:{
                                    //             "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
                                    //         }
                                    //
                                    //     })
                                    // props.setLoadDisableBut(true,u.id)
                                    //
                                    // newPostFollow(u.id)
                                    //
                                    //     .then(response => {
                                    //
                                    //         if (response.data.resultCode===0){
                                    //
                                    //             props.setFollow(u.id)
                                    //
                                    //         }
                                    //         props.setLoadDisableBut(false,u.id)
                                    //     })
                                    props.setFollowThunk(u.id)

                                }}>Follow</button>

                        }

                        <div>
                            <span>name: {u.fullName}</span>
                        </div>
                        <div>
                            <span>status: {u.status}</span>
                        </div>
                        <div>
                            <span>about me: {u.aboutMe}</span>
                        </div>
                        <div>
                            <span>lookingForAJob: {u.lookingForAJob ? "Yes" : "No"}</span>
                        </div>
                        <div>
                            <span>lookingForAJobDescription: {u.lookingForAJobDescription}</span>
                        </div>

                        {/*<div>*/}
                        {/*    <span><b>Contacts :</b> {props.users.contacts}</span>*/}
                        {/*</div>*/}
                        {/*/!*<div>*!/*/}
                        {/*/!*    <div><b>Contacts:</b> {Object.keys(u.contacts).map(key => {*!/*/}
                        {/*/!*         return  <Contacts key={key} contactTitle={key} contactValue={u.contacts[key]} />*!/*/}
                        {/*/!*    })}</div>*!/*/}
                        {/*/!*</div>*!/*/}
                        {/*<div>*/}
                        {/*    <span>github: {props.users.github}</span>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <span>VK: {props.users.vk}</span>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <span>Facebook: {props.users.facebook}</span>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <span>Instagram: {props.users.instagram}</span>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <span>Twitter: {props.users.twitter}</span>*/}
                        {/*</div>*/}

                        { editMod
                            ? <ContactNewForm initialValues={props.prof} users={props.users} onSubmit={onSubmit} />
                            : <ContactUserNew editContactNew={()=>{setEditMod(true)}} prof={props.prof}
                                              users={props.users}  isOwnerNew={props.isOwnerNew}/>
                        }
                        {/*<ContactUserNew users={props.users}/>*/}

                    </div>
                })
                // userId: required(integer)
                // lookingForAJob: required(boolean)
                // lookingForAJobDescription: required(string)
                // fullName: required(string)
                // contacts: required(object)
                // github: required(string)
                // vk: required(string)
                // facebook: required(string)
                // instagram: required(string)
                // twitter: required(string)
                // website: required(string)
                // youtube: required(string)
                // mainLink: required(string)
            }

        </div>
    )

}
const ContactUserNew = ({isOwnerNew,editContactNew,prof, ...props}) =>{

    return(
        <div>
            { isOwnerNew && <button onClick={ editContactNew }>EDIT</button> }
            <div>

                <span><b>Name :</b> {props.users.fullName}</span>
            </div>
            <div>

                <span><b>About Me :</b> {props.users.aboutMe}</span>
            </div>
            <div>

                <span><b>LookingForAJobDescription :</b> {props.users.LookingForAJobDescription}</span>
            </div>

            <div>

                <span><b>Contacts :</b> {props.users.contacts}</span>
                </div>
            {/*<div>*/}
            {/*    <div><b>Contacts:</b> {Object.keys(props.users.contacts).map(key => {*/}
            {/*         return  <Contacts key={key} contactTitle={key} contactValue={props.users.contacts[key]} />*/}
            {/*    })}</div>*/}
            {/*</div>*/}
                <div>
                <span>github: {props.users.github}</span>
                </div>
                <div>
                <span>VK: {props.users.vk}</span>
                </div>
                <div>
                <span>Facebook: {props.users.facebook}</span>
                </div>
                <div>
                <span>Instagram: {props.users.instagram}</span>
                </div>
                <div>
                <span>Twitter: {props.users.twitter}</span>
                </div>

              {/*<Contacts {...props}/>*/}
        </div>
    )

}


const Contacts = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b> : {contactValue}  </div>

}


export default News