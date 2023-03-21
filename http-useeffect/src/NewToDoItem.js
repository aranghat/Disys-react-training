import { useState } from "react";
import  axios  from "axios";

export default function NewToDoItem(){
    let [todo,setToDo] = useState({
                                    name : "",
                                    dueDate : undefined,
                                    completed : false
                                });
    function handleOnSave(){
       axios.post("http://localhost:8080/todos",todo)
            .then((response) => { console.log("Todo created successfully");})
            .catch((error) => {console.error(error)});
    }
    return (
        <div>
            <input type="text" 
              onChange={(event) => setToDo({...todo,name : event.target.value})}
            />
            <input type="datetime-local"
             onChange={(event) => setToDo({...todo,dueDate : event.target.value})}
            />
            <button onClick={handleOnSave}>Save</button>
        </div>
    );
}