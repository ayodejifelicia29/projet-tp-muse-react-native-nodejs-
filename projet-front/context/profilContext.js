
import { createContext , useState,useEffect } from "react" 

export const ProfilContext = createContext()

export function ProfilContextProvider (props){ 
	const[jwt,setJwt] =useState("")
    
    
    return <ProfilContext.Provider value={{jwt ,setJwt }} >
        {props.children}
    </ProfilContext.Provider>
}