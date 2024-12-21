import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const divref = useRef();
  const [Name, setName] = useState("Shyam");

  // const [form,setForm]=useState({email:"",phone:""})
  const [form,setForm]=useState({})

  const handleClick = () => {
    console.log(setCount(count + 1));
  }

  const handleMousehover = () => {

    divref.current.style.backgroundColor = "yellow";
  }

  const handeChange=(e)=>{
    setName(e.target.value);
  }

  const formChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me {count}</button>
      </div>
      <div ref={divref} onMouseOver={handleMousehover} className="red">
        I am red
      </div>

      <input type="text" value={Name} onChange={handeChange} />
    <form>
      <input type="text" name='email' value={form.email?form.email:""} onChange={formChange}/>
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={formChange}/>
      </form>
    </>
  )
}

export default App
