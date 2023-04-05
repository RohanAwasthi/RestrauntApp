import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Showrestraunt from './components/Showrestraunt';
import { useState,useEffect } from 'react';
import Button from './components/Button';
import Navbar from './components/Navbar';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [Show,setShow]=useState([])

  useEffect(() => {
    const getTasks = async () => {
      const dataFromServer = await fetchTasks()
      setShow(dataFromServer)
    }

    getTasks()
}, [])


const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();
  return data;
}

const button=() =>{
  setShowAddTask(!showAddTask)



}

  return (
    
    <div className="container">
      <Navbar/>
     <Button click={button} text='Show'/>
     {
      showAddTask&&<Showrestraunt Show={Show}/>
     }
     
     
    </div>
  );
}

export default App;
