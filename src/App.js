import React, { useState } from "react";
import Card from './UI/Card';
import ToDoForm from './components/Form/ToDoForm';
import ToDoList from "./components/Items/ToDoList";

function App() {

  const [newTask, setNewTask] = useState([]);

const taskCollector = data => {
     setNewTask(prev => [...prev, data])
}

  return (
    <React.Fragment>
      <Card>
       <ToDoForm collectTask = {taskCollector}/>
      </Card>
      <ToDoList totalTasks = {newTask}/>
    </React.Fragment>
    
  )
}

export default App;
