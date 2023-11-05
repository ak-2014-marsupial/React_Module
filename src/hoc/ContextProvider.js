import React, {createContext, useState} from 'react';


const Context = createContext(null)
const ContextProvider = ({children}) => {

    const state=useState(null)
    return (
        <div>
            <Context.Provider value={state}>
                {children}
            </Context.Provider>
        </div>
    );
};

export  {ContextProvider,Context};
