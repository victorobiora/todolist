import React, { useRef, useState } from "react";
import formStyles from './ToDoForm.module.css'


const ToDoForm = props => {

    const [task, setTask] = useState('');
    const reference = useRef();

    const taskHandler = (event) => {
     setTask(event.target.value); 
    }

    const passTaskUp = e => {
        e.preventDefault()
        let totTask = reference.current.value;
        if(totTask.trim().length > 0) {
            const taskObj = {
                text: task,
                id: Math.floor(Math.random()* 100000)
            }
            props.collectTask(taskObj)
            console.log(task)
        }
      
    }

    return (
        <React.Fragment>
            <form className={formStyles.forms} onSubmit = {passTaskUp}>
              <div className={formStyles.taskInput}>
                <label> Enter Task</label>
                <input className={formStyles["input-task"]} type="text" onChange ={taskHandler} ref={reference}/>
             </div>
             <button className={formStyles.taskButton} type="submit"> Add Task </button>              
            </form>
        </React.Fragment>
    )

};

export default ToDoForm;