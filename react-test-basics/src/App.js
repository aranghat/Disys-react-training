import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [heading,setHeading] = useState("Today's Tasks");

  return (
    <div className="App">
       <h1 role='heading'>{heading}</h1>
       <ul>
          <li>Learn React</li>
          <li>Master React</li>
          <li>Explore the full React Library</li>
          <li>Build many React apps</li>
       </ul>

      <button type='button' onClick={() =>
           setHeading("Tomorrows's Tasks")}>Set Heading</button>

    </div>
  );
}

export default App;
