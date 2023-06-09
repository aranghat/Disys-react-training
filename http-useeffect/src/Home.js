import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewToDoItem from "./NewToDoItem";


export default function HomeComponent() 
{
    let [todos,setTodos] = useState([]);
    let  [selected,setSelectedItem] = useState({});
    //Pull existing todolist
    useEffect(() => {
        axios.get("http://localhost:8080/todos")
             .then((response) => { 
                setTodos([...response.data]);
            })
             .catch((error) => {console.error(error);} );
    },[]);

    useEffect(() => setCurrentTitle(),[todos]);
    
    function setCurrentTitle(){
        document.title = `(${todos.filter(d => d.completed == false).length}) - Pending`;
    }

    function onItemAdd(newItem){
        setTodos([...todos,newItem])
    }

    function onHandleComplete(id){
        let item = todos.find((todo) => todo.id === id);
        item.completed = true;
        //Sent the put request to the server
        axios.put(`http://localhost:8080/todos/${id}`,item)
                .then((response) => {
                    setTodos([...todos]);
                })
                .catch((error) => {console.error(error);});
    }

    function onHandleDelete(id){
        axios.delete(`http://localhost:8080/todos/${id}`)
                .then((response) => {
                    let newArray = todos.filter(d => d.id != id);
                    setTodos([...newArray]);
                })
                .catch((error) => {console.error(error);});
    }

    return (
        <div className="container">
            <NewToDoItem onAdd={onItemAdd} />
            <input type="text" value={selected.name} className="forms-control" />
            <input type="checkbox" checked={selected.completed}  />
            <ul className="list-group">
                {todos.map((todo) => 
                    <Link to={'/todo/' + todo.id }
                     onClick={() => setSelectedItem(todo)} 
                     className="list-group-item" 
                     key={todo.id}>
                        <div className="row">
                            <div className="col">{todo.name}</div>
                            <div className="col">{todo.completed ? "Completed" : "Pending"}</div>
                            <div className="col-auto"><button 
                            type="button" 
                            className="btn btn-primary btn-sm"
                            onClick={() => onHandleComplete(todo.id)}
                            >Mark As Complete</button></div>
                            <div className="col-auto">
                                <button type="button"
                                 onClick={() => onHandleDelete(todo.id)}
                                 className="btn btn-danger btn-sm">Delete</button>
                            </div>
                        </div>
                    </Link>
                )}

            </ul>
        </div>
    );
}