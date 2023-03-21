import React,{ createContext, PropsWithChildren } from "react";
import { useLocalStorage,useGetLocalStorage } from "../hooks/useLocalStorage";


interface IGlobalContext {
    getAccessToken():string | null,
    setAccessToken(token:string):void
    //onToggle():void
}


export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);


export const GlobalContextProvider: React.FC<PropsWithChildren<any>>  = ({children})=>{

    const getAccessToken = ()=>{
        return useGetLocalStorage("token");
    }
    const setAccessToken = (token:string)=>{
        useLocalStorage("token",token)
    }
    return(
        <GlobalContext.Provider value={{getAccessToken,setAccessToken}}>
            {children}
        </GlobalContext.Provider>
    )
}