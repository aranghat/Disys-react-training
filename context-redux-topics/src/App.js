import NavBar from './NavBar';
import Component1 from './Component1';
import {useState} from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';

function App() {

  let [style, setStyle] = useState(
    {backgroundColor: "aqua"});

  let [language, setLanguage] = useState("eng");

  return (
   
    <div className="App">
        <button onClick={() => 
          setStyle({backgroundColor: "aqua"})}>
            Light</button>
            <button onClick={() => 
              setStyle({backgroundColor: "red"})}>
                Red</button>
        <select onChange={(event) => setLanguage(event.target.value)}>
            <option value="eng">English</option>
            <option value="tml">Tamil</option>
            <option value="mal">Malayalam</option>
        </select>
        <LanguageContext.Provider value={language}>
       <ThemeContext.Provider value={{style}}>
            <NavBar />
            <Component1 />
            <Component1 />
        </ThemeContext.Provider>
        </LanguageContext.Provider>
    </div>
  );
}

export default App;
