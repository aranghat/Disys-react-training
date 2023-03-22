import { useDispatch } from "react-redux";
import { setNumberGuessed } from "./MyState";
import { useState } from "react";

export default function NumberGuess(){

    let [currentNumber,setCurrentNumber] = useState(0);
    let dispatch = useDispatch();

    function onGuess(){
        dispatch(setNumberGuessed(currentNumber));
    }

    return(
        <div>
             <h1>Guess the Number</h1>
             <input type="number" onChange={(event) => setCurrentNumber(event.target.value)} />
             <button type="button" onClick={onGuess}>Try Your Luck</button>
        </div>
    );
}