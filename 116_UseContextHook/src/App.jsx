import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { counterContext } from './context/context'
function App() {
  const [count, setCount] = useState(0) 
  // let a=5; it can but not change again and again. In only render at ont time. It's Normal js

  return (
    <>
    <counterContext.Provider value={{count,setCount}}>
    <Navbar/>
       {/* <div>This count is {count}</div> */}
       <button onClick={()=>{setCount(count+1)}}>Update count</button>
       </counterContext.Provider>
    </>
  )
}

export default App
