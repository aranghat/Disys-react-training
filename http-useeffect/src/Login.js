import { useHistory } from "react-router-dom";

export default function Login(){

    let navigator = useHistory();

    return(
        <div>
            <input type="text" />
            <button type="button" onClick={() => 
            {
                sessionStorage.setItem("user","1234567");
                navigator.push("/");
            }
        }>Login</button>
        </div>
    )
}