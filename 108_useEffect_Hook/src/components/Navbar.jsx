import React,{useEffect} from 'react'

const Navbar = ({color}) => {
   //case1: Run on every render
  useEffect(()=>{
    alert("hii , i will run on every render");
  })

   //case2: Run only on first render
  useEffect(()=>{
    alert("hii , i will run only on first render");
  },[])

   //case3:Run only when certain value change
  useEffect(()=>{
    alert("i am running because color and count was changed");
    setColor(color+1);
  },[color])

  //Example of Cleanup function
  useEffect(()=>{
    alert("Hey welcome to my page. This is the first render of app.jsx");
    
    return()=>{
      alert("complete was unmounded")
    }
  },[]);

  return (
    <div>
      <p>hii sir, How are you? I am using {color}</p>
    </div>
  )
}

export default Navbar
 