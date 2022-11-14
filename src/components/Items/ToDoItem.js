import React from "react";
import toDoSty from './ToDoItem.module.css'



const ToDoItem = props => {

    return (
       <div className={toDoSty.area}>
         <div className={toDoSty.text}>
            {props.text}
         </div>
       </div>
    )
}

export default ToDoItem;