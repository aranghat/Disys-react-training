import ToDoItem from "./ToDoItem"
import add from './Test'
import { useState } from "react"

import './site.css'
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
    let [search,setSearchTerm] = useState('');

    

    function markAsComplete(id){
        let item = toDoList.find(d => d.id == id);
        item.isComplete = true;
        setToDoList([...toDoList]);
    }

    function deleteItemById(id){
        var deletedArray = 
        toDoList.filter(d => d.id != id);
        setToDoList([...deletedArray]);
    }

    /*function handleToDoItemChange(event){
        setToDoItem(event.target.value);
    }*/

    function handleAddToDoItem(){
        setToDoList([...toDoList
                    ,{id: todoItems.length + 1, name: toDoItem, isComplete: false}]);
        console.debug(todoItems);
    }

    function filterData(item){

        return search.length > 0 ? item.name.indexOf(search) > -1
                 : true;
    }
    return (<div className="container">
            <h1>My To Do Items</h1>
            Pending : {toDoList.filter(d => d.isComplete == false).length}
            <div className="input-group">
                <input type="text" 
                className="form-control"
                placeholder="Type the task you wish to add"
                onChange={(event) => setToDoItem(event.target.value)}
                />
                <button
                 className="btn btn-primary"
                type="button" onClick={handleAddToDoItem}>Add</button>
            </div>
            <div>
                <input type="text"
                className="form-control"
                onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            <div>
                <select className="form-select">
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            {
                toDoList.filter((item) => filterData(item))
                        .map(item => 
                    <div className="list-group" 
                    key={item.id}>
                         <ToDoItem 
                                id = {item.id}
                                name = {item.name}
                                isComplete = {item.isComplete}
                                onMarkAsComplete={markAsComplete}
                                onDeleteItem={deleteItemById}
                                />
                    </div>
               )
            }
        </div>)
}