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
    let [toDoList, setToDoList] = useState(todoItems);

    function markAsComplete(id){
        let item = toDoList.find(d => d.id == id);
        item.isComplete = true;
        setToDoList([...toDoList]);
    }

    /*function handleToDoItemChange(event){
        setToDoItem(event.target.value);
    }*/

    function handleAddToDoItem(){
        setToDoList([...toDoList
                    ,{id: todoItems.length + 1, name: toDoItem, isComplete: false}]);
        console.debug(todoItems);
    }

    return (<div>
            <h1>My To Do Items</h1>
            Pending : {toDoList.filter(d => d.isComplete == false).length}

            <div>
                <input type="text" 
                onChange={(event) => setToDoItem(event.target.value)}
                />
                <button type="button" onClick={handleAddToDoItem}>Add</button>
            </div>
            {
                toDoList.map(item => 
                <ToDoItem 
                id = {item.id}
                name = {item.name}
                isComplete = {item.isComplete}
                onMarkAsComplete={markAsComplete}
                  />)
            }
        </div>)
}