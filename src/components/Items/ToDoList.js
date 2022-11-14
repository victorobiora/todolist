import React from "react";
import toDoStyles from './ToDoList.module.css'
import ToDoItem from "./ToDoItem";


const ToDoList = props => {
    return (
        <div className={toDoStyles.toDo}>
            {props.totalTasks.length > 0 && props.totalTasks.map(el => (
                <ToDoItem text={el} key = {Math.floor(Math.random()* 100000)}/>
            ))}
        </div>
    )
};

export default ToDoList