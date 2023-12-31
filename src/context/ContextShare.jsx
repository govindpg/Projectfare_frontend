import React, { createContext, useState } from 'react'

 export const addProjectResponseContext = createContext()
 export const isAuthProjectContext = createContext()
function ContextShare({children}) {
       const[addProjectResponse,setAddProjectResponse]= useState({ })

       const[isAuthToken,setIsAuthToken]=useState(true)
  return (
    <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}><isAuthProjectContext.Provider value={{isAuthToken,setIsAuthToken}}>{children}</isAuthProjectContext.Provider></addProjectResponseContext.Provider>
  )
}

export default ContextShare