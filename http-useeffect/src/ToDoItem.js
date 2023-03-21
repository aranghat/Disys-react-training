import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"

export default function ToDoItemComponent(){

    let {id} = useParams();
    let navigator = useHistory();
    let [todo,setToDo] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/todos/${id}`)
            .then((response) => {
                setToDo({...response.data});
            });
    },[]);


    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">{todo.name}</div>
                        <div className="col">{todo.dueDate}</div>
                    </div>
                </li>
            </ul>
            {id}
            <button className="btn btn-primary"
            onClick={() => {
                if(id % 2 == 0)
                {
                    navigator.push("/")
                } else {navigator.push("/aboutus")}}}
            >Go Home</button>
        </div>
    )
}