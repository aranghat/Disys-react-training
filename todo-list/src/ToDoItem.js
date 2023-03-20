import { useState } from "react";
export default 
function ToDoItem({id
                ,name
                ,isComplete,
                onMarkAsComplete})
{
    //let [completeState, setCompleteState] = 
    //useState(isComplete);

    function markAsComplete()
    {
        //setCompleteState(true);
       // console.debug("Marked as complete: ");
       onMarkAsComplete(id);
    }

    return(<div>
        <h2>{name}</h2>
        <h3>{isComplete ? "Completed" 
        : "Pending"}</h3>
        { 
          !isComplete &&
            <button type="button"
            onClick={markAsComplete}
            >
            Mark Complete</button>
        }
            <hr />
    </div>)
}
