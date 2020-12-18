import React, {useState, createContext} from 'react'

 export const SortedContext=createContext();

export const SortedProvider = props =>{
  const[sorted, setSorted]=useState([])


 

    return(
        <SortedContext.Provider value={[sorted, setSorted]}>
            {props.children}
        </SortedContext.Provider>
    )


}