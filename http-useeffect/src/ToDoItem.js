import { useParams } from "react-router-dom"

export default function ToDoItemComponent(){

    let {id} = useParams();

    return (
        <div>
            <h1>ToDoItemComponent</h1>
            {id}
        </div>
    )
}