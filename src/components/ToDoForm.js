import React from "react";


const ToDoForm = props => {

    return (
        <React.Fragment>
            <form>
              <div>
                <label for = "input-text"> Enter Task</label>
                <input type="text" id="input-text"/>
             </div>
             <button type="submit"> Add Task </button>
               
            </form>
        </React.Fragment>
    )

};

export default ToDoForm;