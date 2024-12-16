import { useRef, useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnref=useRef();
  const [showbtn,setShowbtn]=useState(true);
  const [todos,setTodos]=useState([
    {
      title:"hey",
    desc:"i am a good"
  },{
    title:"hey Another todo",
    desc:"I am a good todo"
  },{
    title:"hhe",
    desc:"i am a god todo"
  },
  ])

  const Todo=({todo})=>{return (<>
  <div className="todo">{todo.title}</div>
  <div className="todo">{todo.desc}</div>
  </>)}

  useEffect(()=>{
    console.log("Rendering...");
    btnref.current.style.backgroundColor="red";
  },[]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* displaying todo */}
      {todos.map(item=>{
        return <Todo todo={todo}/>
      })}
      <Todo/>
      {/* {showbtn? <button>I will be shown only when second button is clicked</button>:<button>thenga</button>} */}
      {showbtn && <button>I will be shown only when second button is clicked</button>}
      {/* //if true it run */}

      <div className="card">
        {/* <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <button ref={btnref} onClick={()=>setShowbtn(!showbtn)}> toogle show btn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
