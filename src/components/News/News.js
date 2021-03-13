import React from 'react';
import classes from './News.module.css';
import kot from './../../Photo/Images/kot.png'
import photo from "../../Photo/Images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {newDelUnfollow, newPostFollow} from "../Settings/SetApiAxios";
import {setFollowThunk} from "../Settings/Set_reducers/setUserReducer";
import NewsStatus from "./newsStatus";

const News = (props) => {

   const onCurPageSet =(currentPageSet)=>{
        props.SetCurPage(currentPageSet)
    }

    const countPagesSet = Math.ceil((props.countUsersSet/props.pageSizeSet)/150)
    const pagesSet =[]
    for (let i=1; i<=countPagesSet; i++)
        pagesSet.push(i)

    return (

        <div className={''}>

            { props.isSetAuth ? props.login :  <NavLink to={'/Login'}><button>LOGIN</button></NavLink> }


            {
                pagesSet.map((p,i)=>{
                    return <span onClick={(e) => {onCurPageSet(p)}} key={i}
                                 className={props.currentPageSet === p  ? classes.active : classes.pag } >{p}</span>

                }
                )
            }


           <h3>News about Users</h3>

            <div>
                <span><b>STATUS :</b></span>
                <NewsStatus  status={"Hello Friend"}/>
            </div>

            <br/>

            {

                props.users.map((u, i) => {
                    return <div key={i}>
                        <div>
                           {/*<NavLink to={'/Profile/'+u.id}>*/}
                            <img className={classes.kot} src={u.photos.small ? u.photos.small : kot} alt={'image'}/>
                           {/*</NavLink>*/}
                            < img src={props.prof.photos.small} alt="image"/>
                        </div>
                        {
                            u.followed

                                ?  <button disabled={props.setDisableBut.some(id => id === u.id)} onClick={()=>{
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

                                :  <button disabled={props.setDisableBut.some(id => id === u.id)}  onClick={()=> {
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

                                    } }>Follow</button>

                        }

                        <div>
                            <span >name: {u.fullName}</span>
                        </div>
                        <div>
                            <span>status: {u.status}</span>
                        </div>
                        <div>
                            <span>about me: {u.aboutMe}</span>
                        </div>


                            <div>
                                <span>lookingForAJob: {u.lookingForAJob}</span>
                            </div>
                            <div>
                                <span>lookingForAJobDescription: {u.lookingForAJobDescription}</span>
                            </div>
                            <div>
                                <span>contacts: {u.contacts}</span>
                            </div>
                            <div>
                                <span>github: {u.github}</span>
                            </div>
                        <div>
                            <span>VK: {u.vk}</span>
                        </div>


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

export default News