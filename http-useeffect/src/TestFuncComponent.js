import {useState,useEffect} from 'react';
export default function TestFuncComponent(){

    let [counter,setCounter] = useState(0);
    let [counter2,setCounter2] = useState(0);
    //Same sa componentDidMount and componentDidUpdate 
    //merged in to one
    useEffect(() => {
        console.log("Test Func Component Updated");
    });

    //Same sa componentDidMount
    useEffect(() => {
        console.log("Test Func Component Mounted");
    },[]);

    //Same as componentDidUpdate but only if a given state changes
    useEffect(() => {
        
        console.log("Test Func Component Updated only if counter changec");
    },[counter,counter2]);
    

    return (
        <div>
            <h1>TestFuncComponent</h1>
            {counter} --- { counter2}
            <button onClick={() => setCounter2(counter2 + 1)}>
                Increment Counter 2</button>
            <button onClick={
                () => setCounter(counter + 1)}>Increment</button>  
        </div>
    );
}