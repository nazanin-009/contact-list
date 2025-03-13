import { GlobalStyles } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

interface DarkModeProviderProps{
    children : ReactNode
}

export const DarkModeContext = createContext <DarkModeContextType>({darkMode:false , setDarkMode: ()=>{}})

export type DarkModeContextType={
    darkMode : boolean;
    setDarkMode : any;
}
export default function DarkModeProvider({children}:DarkModeProviderProps){
   const[darkMode,setDarkMode]=useState(false)
   return (<DarkModeContext.Provider value={{darkMode,setDarkMode}}>
    {children}
    <GlobalStyles styles={{body: {backgroundColor :darkMode ?"#444" : undefined }}}/>
   </DarkModeContext.Provider>  )
}
