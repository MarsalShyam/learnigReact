import React from 'react'
import Button from './Button'
const Navbar=({count})=>{
    return(
        <>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <Button count={count}/>
        </nav>
        </>
    )
}
export default Navbar
