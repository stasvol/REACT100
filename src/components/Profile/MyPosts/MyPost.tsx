import React from 'react';
import classes from './MyPost.module.css';
import Post  from "./Post/Post";
import MyPostForm from "./MyPostForm";
import {PostDataType} from "../../../redux/prof_reducer";

type propsType ={
    PostData:Array<PostDataType>,
    addPost:(newText:string)=>void,
    post:string,
}

const MyPost:React.FC<propsType >  = (props) => {
    // console.log('RENDER')
    let PostUser = props.PostData.map(p => <Post like={p.like} message={p.message} id={p.id} key={p.id}/>);

    // let newPostText = React.createRef();

    // const addNewPost = () => {
    //     // let newPost = newPostText.current.value;
    //     props.addPost();
    //     // newPostText.current.value = '';
    //     // props.addChangeText('')
    //     // let action = addNewPostActionCreator();
    //     // props.dispatch(action);
    // }
    //
    // const handleChange = () => {
    //     let newPost = newPostText.current.value;
    //     props.addChangeText(newPost)
    //     // props.dispatch(handleChangeActionCreator(newPost));
    //     console.log(newPost)
    // }

    const onSubmit = (value:any) => {
        props.addPost(value.newText)
        value.newText = " "
    }

    return (
        <div className={classes.posts}>
            <h4 className={classes.head}>{props.post}</h4>

            <MyPostForm onSubmit={onSubmit}/>
            {PostUser}

            {/*<div>*/}
            {/* <div className={classes.block}>*/}
            {/*     <textarea ref={newPostText} onChange={handleChange} value={props.newText} placeholder={'add post'}/>*/}
            {/*     <button onClick={addNewPost} className={classes.btn}>Add post</button>*/}
            {/* </div>*/}
            {/* <Post like={PostData[0].like} message={PostData[0].message} />*/}
            {/* <Post like={PostData[1].like} message={PostData[1].message}/>*/}
            {/* /!*<Post like={PostData[2].like} message={PostData[2].message}/>*!/*/}
            {/*</div>*/}

        </div>

    )

}

export default React.memo (MyPost);

  //       CLASS COMPONENT - OPTIMISATION => "shouldComponentUpdate" end "PureComponent"

// class MyPost extends PureComponent {                      // OPTIMISATION - noy RENDER
//
//     // shouldComponentUpdate(nextProps, nextState, nextContext) {
//     //   return   nextProps !== this.props  ||  nextState !== this.state
//     // }
//
//     render() {
//         // console.log('RENDER')
//         let PostUser = this.props.PostData.map(p => <Post like={p.like} message={p.message} id={p.id} key={p.id}/>);
//
//         // let newPostText = React.createRef();
//
//         // const addNewPost = () => {
//         //     // let newPost = newPostText.current.value;
//         //     props.addPost();
//         //     // newPostText.current.value = '';
//         //     // props.addChangeText('')
//         //     // let action = addNewPostActionCreator();
//         //     // props.dispatch(action);
//         // }
//         //
//         // const handleChange = () => {
//         //     let newPost = newPostText.current.value;
//         //     props.addChangeText(newPost)
//         //     // props.dispatch(handleChangeActionCreator(newPost));
//         //     console.log(newPost)
//         // }
//
//         const onSubmit = (value) => {
//
//             this.props.addPost(value.newText)
//         }
//
//         return (
//             <div className={classes.posts}>
//                 <h4 className={classes.head}>{this.props.post}</h4>
//
//                 <MyPostForm onSubmit={onSubmit}/>
//                 {PostUser}
//
//                 {/*<div>*/}
//                 {/* <div className={classes.block}>*/}
//                 {/*     <textarea ref={newPostText} onChange={handleChange} value={props.newText} placeholder={'add post'}/>*/}
//                 {/*     <button onClick={addNewPost} className={classes.btn}>Add post</button>*/}
//                 {/* </div>*/}
//                 {/* <Post like={PostData[0].like} message={PostData[0].message} />*/}
//                 {/* <Post like={PostData[1].like} message={PostData[1].message}/>*/}
//                 {/* /!*<Post like={PostData[2].like} message={PostData[2].message}/>*!/*/}
//                 {/*</div>*/}
//
//             </div>
//
//         )
//
//     }
// }
//
//
// export default MyPost