import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {

    // State to hold the API data
    const [data, setData] = useState([]);
   

    //Fetch data from API
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((result)=>setData(result));
    },[]);

    //desplay the website
  return (
    <>
      <div className="nav sticky top-0">
        <Navbar />
      </div>
  
      <div className="cards flex flex-col items-center md:flex-row md:flex-wrap">
        {
          data.map((item)=>(
            <Card  key={item.id}  userId={item.userId} title={item.title} body={item.body} />
          ))
        }
      </div>

     

    </>
  )
}

export default App
