import React from 'react'

const MyContext = React.createContext(null);

export const MyProvider = (props)=>{
    return (
        <MyContext.Provider value={props.store}>
            {props.children}
        </MyContext.Provider>
    )
}


export default MyContext
