import React from 'react';
import classes from './MyPost.module.css';
import Post from "./Post/Post";



const MyPost = (props) => {
    let PostUser = props.PostData.map(p => <Post like={p.like} message={p.message} id={p.id} key={p.id}/>);

    let newPostText = React.createRef();

    const addNewPost = () => {
        // let newPost = newPostText.current.value;
        props.addPost();
        // newPostText.current.value = '';
        // props.addChangeText('')
        // let action = addNewPostActionCreator();
        // props.dispatch(action);
    }

    const handleChange = () => {
        let newPost = newPostText.current.value;
        props.addChangeText(newPost)
        // props.dispatch(handleChangeActionCreator(newPost));
    }
    // console.log(props.newText)

    return (
        <div className={classes.posts}>
            <h4 className={classes.head}>{props.post}</h4>
            <div className={classes.block}>
                <textarea ref={newPostText} onChange={handleChange} value={props.newText} placeholder={'add post'}/>
                <button onClick={addNewPost} className={classes.btn}>Add post</button>
            </div>
            {PostUser}
            {/*<Post like={PostData[0].like} message={PostData[0].message} />*/}
            {/*<Post like={PostData[1].like} message={PostData[1].message}/>*/}
            {/*/!*<Post like={PostData[2].like} message={PostData[2].message}/>*!/*/}

        </div>

    )

}


export default MyPost