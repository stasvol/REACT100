import React from "react";
import classes from './ProfAvatar.module.css'
import photo from "../../../Photo/Images/kot.jpg";

const ProfAvatar = (props) => {
    return (
        <div>
            <div>
                <img className={classes.img} alt={'image'}
                     src={'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-06/angry_chihuahua.png?itok=TWxYDbOT'}/>
                <div className={classes.block}>
                    <h3 className={classes.head}>ZAGOLOVOK</h3>
                    <p className={classes.content}>
                        {/*<img src={photo}/>*/}
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi architecto consequuntur cupiditate deserunt distinctio, dolore ea ipsam labore laborum minima numquam, omnis porro quae sapiente tempora vero voluptate.</span><span>Aliquam blanditiis deserunt hic, itaque nam non qui quis voluptate! Accusamus ducimus esse explicabo inventore magni suscipit unde, voluptates! Culpa distinctio dolorum eligendi neque quaerat quas quo sed similique voluptas.</span><span>Accusamus aliquam eaque eligendi exercitationem illum incidunt labore magnam maiores neque, nostrum numquam officiis praesentium quisquam sunt tempore! Aliquid amet dolores explicabo fuga id magnam minima, minus pariatur quisquam sunt.</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProfAvatar