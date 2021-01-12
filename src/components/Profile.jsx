import React, {Component} from 'react';
import classes from './Profile.module.css';

 const Profile = () =>{
     return(
         <div className={classes.content}>
             <div>
                 <img className={classes.imgCont} src={'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'}/>
             </div>
             <div>
                 <img src={'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-06/angry_chihuahua.png?itok=TWxYDbOT'}/>
                 avatar + discript
             </div>
             <div>
                 My posts
                 <div>New post</div>
             </div>
             <div>
                 <div>Post1</div>
                 <div>Post2</div>
             </div>
         </div>
     )
 }
 export default Profile