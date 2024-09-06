"use client"
import React from "react";

const AppContext = React.createContext();

const ContextProvider = ({children}) => {
    const [packageId,setPackageId] = React.useState(undefined);

    return (
        <AppContext.Provider value={{packageId,setPackageId}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,ContextProvider}