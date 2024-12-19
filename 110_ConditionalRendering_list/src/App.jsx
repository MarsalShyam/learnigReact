import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const btnref = useRef();
  const [showbtn, setShowbtn] = useState(true);
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "i am a good"
    }, {
      title: "hey Another todo",
      desc: "I am a good todo"
    }, {
      title: "hhe",
      desc: "i am a god todo"
    },
  ])

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div className=" m-4 border border-1 border-purple-400">
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }

  useEffect(() => {
    console.log("Rendering...");
    btnref.current.style.backgroundColor = "red";
  }, []);

  return (
    <>

      <h1>Vite + React</h1>
      {/* displaying todo */}

      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return <div key={todo.title} className=" m-4 border border-1 border-purple-400">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })}
      {/* <Todo/> */}
      {/* {showbtn? <button>I will be shown only when second button is clicked</button>:<button>thenga</button>} */}
      {showbtn && <button>I will be shown only when second button is clicked</button>}
      {/* //if true it run */}

      <div className="card">
        {/* <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <button ref={btnref} onClick={() => setShowbtn(!showbtn)}> toogle show btn</button>
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
