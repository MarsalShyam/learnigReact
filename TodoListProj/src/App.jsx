

import './App.css'
import Navbar from "./components/Navbar";


function App() {
    

  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[80vh]">

      <div className="addTodo">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input type="text"/>
        <button>Add</button>
      </div>

      <h2 className='text-lg font-bold'>Your Todos</h2>

      <div className="todos">
        <div className="todo flex">
          <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
      
    </div>
      
    </>
  )
}

export default App
