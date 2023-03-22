import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [heading,setHeading] = useState("Today's Tasks");
  let [topics,setTopics] = useState([
    "Learn React",
    "Master React",
    "Explore the full React Library",
    "Build many React apps",

  ]);

  return (
    <div className="App">
       <h1 role='heading'>{heading}</h1>
       <ul className='list-group'>
          { topics.map((item) =>  <li>{item}</li>)}
          
       </ul>
      <button type='button' id="btnLastElement" onClick={()=> setTopics([...topics.shift()])}></button>
      

    </div>
  );
}

export default App;
