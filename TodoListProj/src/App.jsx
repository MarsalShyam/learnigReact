import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Navbar from "./components/Navbar"


function App() {

  //input text
  const [todo, setTodo] = useState("")
  //array of todo
  const [todos, setTodos] = useState([])

  const handleEdit = () => {
    console.log("it is edit function");
  }
  const handleDelete = () => {
    alert("it is delete function");
  }
  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4, todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
    
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleCheckbox=(e)=>{
   let id= e.target.name
   todos.filter()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[80vh]">

        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-80' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
        </div>

        <h2 className='text-lg font-bold'>Your Todos</h2>

        <div className="todos">
          {todos.map(item => {
            
            return <div key={todo} className="todo flex justify-between my-5">

              <input name="{todo.id}" onChange={handleCheckbox} type="checkbox"/>
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>

              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>Edit</button>
                <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>Delete</button>
              </div>
            </div>
          })}
        </div>


      </div>

    </>
  )
}

export default App
