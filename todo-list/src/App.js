import ToDoItem from "./ToDoItem"
import add from './Test'
import { useState } from "react"


export default function App()
{
    let todoItems = [
        {id: 1, name: 'Learn React', isComplete: true},
        {id: 2, name: 'Learn GraphQL', isComplete: false},
        {id: 3, name: 'Learn Apollo', isComplete: false},
        {id: 4, name: 'Learn React Native', isComplete: false}
    ]

    let [toDoItem,setToDoItem] = useState('');

    /*function handleToDoItemChange(event){
        setToDoItem(event.target.value);
    }*/

    function handleAddToDoItem(){
        todoItems.push({id: todoItems.length + 1, name: toDoItem, isComplete: false});
    }

    return (<div>
            <h1>My To Do Items</h1>
            <div>
                <input type="text" 
                onChange={(event) => setToDoItem(event.target.value)}
                />
                <button type="button" onClick={handleAddToDoItem}>Add</button>
            </div>
            {
                todoItems.map(item => 
                <ToDoItem 
                id = {item.id}
                name = {item.name}
                isComplete = {item.isComplete}
                  />)
            }
        </div>)
}