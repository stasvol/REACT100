import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore'
import MyContext, {MyProvider} from "./MyContext";


const rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            {/*<MyContext.Provider value={store}>*/}
            <MyProvider store={store}>
                <App state={state}/>
                {/*addChangeText={store.addChangeText.bind(store)}*/}
                {/*addMessage={store.addMessage.bind(store)} addChangeNewMessage={store.addChangeNewMessage.bind(store)}  */}
            </MyProvider>
            {/*</MyContext.Provider>*/}

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state}  addPost={addPost}  addMessage={addMessage} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
reportWebVitals();
