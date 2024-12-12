import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  // let a=5; it can but not change again and again. In only render at ont time. It's Normal js

  return (
    <>
       <div>This count is {count}</div>
       <button onClick={()=>{setCount(count+1)}}>Update count</button>
    </>
  )
}

export default App
