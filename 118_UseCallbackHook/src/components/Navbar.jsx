import React from 'react'
import {memo} from 'react'
const Navbar = ({adjective,getAdjective}) => {
    console.log("Navbar  is rending...");
  return (
    <div>
      <h1>I am {adjective} Navbar</h1>
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
