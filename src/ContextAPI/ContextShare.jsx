import React, { createContext, useState } from 'react'

//1 create context
export const addContextResponse = createContext()
export const updateContextResponse = createContext()
function ContextShare({children}) {
    //2 create state for holding details
   const[addContext,setAddContext]=useState("")
    const[updateContext,setUpdateContext]=useState("")
  return (
    <div>
      <addContextResponse.Provider value={{addContext,setAddContext}}>
        <updateContextResponse.Provider value={{updateContext,setUpdateContext}}>
        {children}
        </updateContextResponse.Provider>
      </addContextResponse.Provider>
    </div>
  )
}

export default ContextShare
