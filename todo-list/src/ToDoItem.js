import { useState } from "react";
export default 
function ToDoItem({id
                ,name
                ,isComplete})
{
    let [completeState, setCompleteState] = 
    useState(isComplete);

    function markAsComplete()
    {
        setCompleteState(true);
        console.debug("Marked as complete: ");
    }

    return(<div>
        <h2>{name}</h2>
        <h3>{completeState ? "Completed" 
        : "Pending"}</h3>
        { 
          !completeState &&
            <button type="button"
            onClick={markAsComplete}
            >
            Mark Complete</button>
        }
            <hr />
    </div>)
}
