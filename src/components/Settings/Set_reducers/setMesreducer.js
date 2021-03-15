const NEW_POST_MES_TEXT = 'NEW_POST_MES_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';

const initialState = {
    posts: [

        {id: 1, post: 'Hello React', },
        {id: 2, post: 'Hi, JS', }
    ],

    newPostMesText: 'HI'
}

 const SetMesReducer =(state=initialState,action) =>{

          switch (action.type) {

              case NEW_POST_MES_TEXT:

                  return {
                      ...state,
                      newPostMesText: action.textNew
                  }
                  // state.newPostMesText = action.textNew;
                  // return state;

              case ADD_NEW_POST:

                  let textNew = action.newPostMesText        //state.newPostMesText
                  return {

                      ...state,
                      posts: [...state.posts,{id: 5, post: textNew }],
                      newPostMesText: '',

                  }

                  // let textNew = state.newPostMesText
                  // state.newPostMesText = ''
                  // state.posts.push({id: 5, post: textNew })
                  //    console.log(textNew)
                  // return  state;

              default:
                  return  state;
          }
   //     if (action.type === NEW_POST_MES_TEXT) {
   //     state.newPostMesText = action.textNew
   // // this.rerender(this.state)
   //
   //    }else  if (action.type === ADD_NEW_POST ){
   //    let textNew = state.newPostMesText
   //    state.newPostMesText = ''
   //    state.push({id: 5, post: textNew })
   // // this.rerender(this.state)
   //  }

 }

export const newPostMesTextAC = (textNew) =>({type:NEW_POST_MES_TEXT, textNew})

export const addNewPostAC = (newPostMesText) => ({type: ADD_NEW_POST,newPostMesText})


 export default SetMesReducer