import React, { useState } from 'react'

export const Context=React.createContext()

const Store=({children})=>{
  const [state,setState]=useState({"test":"success"})
  return(
    <Context.Provider value={[state,setState]}>{children}</Context.Provider>
  )
}

export default Store