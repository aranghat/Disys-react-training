import { useState } from "react";
import BorderComponent from "./BorderComponent";
export default 
function ToDoItem({id
                ,name
                ,isComplete,
                onMarkAsComplete
            ,onDeleteItem})
{
    //let [completeState, setCompleteState] = 
    //useState(isComplete);

    function markAsComplete()
    {
    
        //setCompleteState(true);
       // console.debug("Marked as complete: ");
       onMarkAsComplete(id);
    }

    return(
    <BorderComponent>
            <div className
            ="list-group-item mb-2">
                <h2
                style={{textDecoration : 
                    isComplete ? "line-through" : "none"
                }}
                >{name}</h2>
                <h3 
                className={isComplete 
                    ? "text-success" 
                    : "text-danger"}
                >{isComplete ? 
                <span>
                    <i className="bi bi-check"></i>Completed
                </span> 
                : "Pending"}</h3>
                { 
                !isComplete &&
                    <button type="button"
                    onClick={markAsComplete}
                    >
                    Mark Complete</button>
                }

                <button onClick={() => 
                    onDeleteItem(id)}>Delete</button>
                
            </div>
    </BorderComponent>)
}
