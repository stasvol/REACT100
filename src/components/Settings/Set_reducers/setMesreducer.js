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
                  state.newPostMesText = action.textNew;
                  return state;

              case ADD_NEW_POST:
                  let textNew = state.newPostMesText
                  state.newPostMesText = ''
                  state.push({id: 5, post: textNew })

                  return  state;

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

export const newPostMesTextAC = (textNew) =>{
    return {type:NEW_POST_MES_TEXT, textNew}
}
export const addNewPostAC = () => {
    return {type: ADD_NEW_POST}
}

 export default SetMesReducer