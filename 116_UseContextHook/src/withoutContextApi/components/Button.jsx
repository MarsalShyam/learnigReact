import React from 'react'
import Cm from './Cm'
const Button = ({count}) => {
  return (
    <div>
      <button>
        click me
        <span>
            <Cm count={count}/>
        </span>
      </button>
      ram
    </div>
  )
}

export default Button
