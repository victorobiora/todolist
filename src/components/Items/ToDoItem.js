import React from "react";
import toDoSty from './ToDoItem.module.css'
import { useState } from "react";



const ToDoItem = props => {
   const [showButton, setShowButton] = useState(false)

   const getDeleteItem = event => {
      props.removeItem({text: props.text, id: props.id})
   }

   const mouseCrop = () => {
      setShowButton(true)
   }

    return (
       <div className={toDoSty.area} onMouseOver = {mouseCrop}>
         <div className={toDoSty.text}>
            {props.text}
         </div>
        {showButton &&<button className={toDoSty.but} onClick={getDeleteItem} >
          X </button>} 
       </div>
    )
}

export default ToDoItem;