import React, { useState} from "react";
import Card from './UI/Card';
import ToDoForm from './components/Form/ToDoForm';
import ToDoList from "./components/Items/ToDoList";

function App() {

  const [newTask, setNewTask] = useState([]);
  
const taskCollector = data => {
  console.log(newTask)
     setNewTask(prev => [...prev, data])
}

const taskRemover = data => {
  console.log(data)
  console.log(newTask)

 setNewTask(prev => {
 const pp = prev.filter(el => el.id !== data.id)
  return pp })
 }

  return (
    <React.Fragment>
      <Card>
       <ToDoForm collectTask = {taskCollector}/>
      </Card>
      <ToDoList totalTasks = {newTask}  removeTask = {taskRemover}/>
    </React.Fragment>
    
  )
}

export default App;
