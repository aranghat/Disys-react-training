import { TestComponent } from "./TestComponent";
import { useState,useEffect } from "react";
import TestFuncComponent from "./TestFuncComponent";
import NewToDoItem from "./NewToDoItem";
import axios from "axios";

export default function App(){
  
    let [todos,setTodos] = useState([]);
    //Pull existing todolist
    useEffect(() => {
        axios.get("http://localhost:8080/todos")
             .then((response) => { 
                setTodos([...response.data]);
            })
             .catch((error) => {console.error(error);} );
    },[]);
        

    function onItemAdd(newItem){
        setTodos([...todos,newItem])
    }

    return (
        <div>
            <NewToDoItem onAdd={onItemAdd} />

            <ul>
                {todos.map((todo) => 
                    <li>{todo.name}</li>
                )}

            </ul>
        </div>
    );
}