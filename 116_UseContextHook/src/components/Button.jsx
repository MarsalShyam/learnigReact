import React,{useContext} from 'react'
import Cm from './Cm'
import {counterContext} from '../context/context'
const Button = () => {
  const value=useContext(counterContext);
  return (
    <div>
      <button onClick={()=>value.setCount((count)=>count+1)}>
        click me
        <span>
            <Cm/>
        </span>
      </button>
      ram
    </div>
  )
}

export default Button
