import React from 'react';
import classes from './News.module.css';
import kot from './../../Photo/Images/kot.png'
import photo from "../../Photo/Images/user.png";
import {NavLink} from "react-router-dom";

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

            {
                pagesSet.map((p,i)=>{
                    return <span onClick={(e) => {onCurPageSet(p)}} key={i}
                                 className={props.currentPageSet === p  ? classes.active : classes.pag } >{p}</span>

                }
                )
            }


           <h3>News about Users</h3>

            {
                props.users.map((u, i) => {
                    return <div key={i}>
                        <div>
                           <NavLink to={'/Profile/'+u.id}>
                            <img className={classes.kot} src={u.photos.small ? u.photos.small : kot} alt={'image'}/>
                           </NavLink>
                            < img src={props.prof.photos.small} alt="image"/>
                        </div>
                        {
                            u.followed
                                ?  <button onClick={()=>{props.setUnFollow(u.id)} }>Unfollow</button>
                                :  <button onClick={()=> {props.setFollow(u.id)} }>Follow</button>

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