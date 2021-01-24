const ADD_POST = 'ADD POST';
const ADD_CHANGE_TEXT = 'ADD CHANGE TEXT';

let initialState = {

        PostData: [
            {id: 1, like: '20', message: 'Super'},
            {id: 2, like: '3', message: 'Kliovo'},
            {id: 3, like: '9', message: 'Class'},
        ],

        newText: 'Hello',

    }


const postReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                like: '0',
                message: state.newText                 // (message)-parametr funktion
            };
            state.PostData.push(newPost);
            console.log(newPost)
            state.newText = '';
            console.log(state.newText)
            return state;
        case ADD_CHANGE_TEXT:
            state.newText = action.newText;
            console.log(state.newText)
            return state;

        default:
            return state;
    }
}

export  const addNewPostActionCreator =() => ({ type: ADD_POST  });

export  const handleChangeActionCreator =(newPost) => ({ type:ADD_CHANGE_TEXT, newText:newPost });

export default postReducer





// if (action.type=== ADD_POST){
//     let newPost = {
//         id: 4,
//         like: '0',
//         message: state.newText                 // (message)-parametr funktion
//     };
//     state.PostData.push(newPost);
//     state.newText = '';
// } else if (action.type === ADD_CHANGE_TEXT ) {
//     state.newText = action.newText
// }