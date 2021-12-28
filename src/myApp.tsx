import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import store from "./redux/reduxStore";
import {AppContainer} from "./appContainer";

let MyApp:React.FC = () => {
    return <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default MyApp