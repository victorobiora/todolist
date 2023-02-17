import React from "react";
import toDoStyles from './ToDoList.module.css'
import ToDoItem from "./ToDoItem";


const ToDoList = props => {
    return (
        <div className={toDoStyles.toDo}>
            {props.totalTasks.length > 0 && props.totalTasks.map(el => {
            return  <ToDoItem text={el.text} key = {el.id} id={el.id} removeItem ={props.removeTask}/>
            })}
        </div>
    )
};

export default ToDoList