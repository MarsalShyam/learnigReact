import React,{useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(()=>{
        console.log("color was changed");
    },[color])

  return (
    <div>
      <p>hii sir, How are you? I am using {color}</p>
    </div>
  )
}

export default Navbar
