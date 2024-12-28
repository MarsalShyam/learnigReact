import { useContext } from "react"
import React from 'react'
import { counterContext } from "../context/context";
const Cm = () => {
  const value=useContext(counterContext);
  return (
    <div>
      <h1>{value.count}</h1>
    </div>
  )
}

export default Cm
