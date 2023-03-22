
import NumberGuess from './NumberGuessComponent';
import GuessResult from './Temp/GuessResult';

function App() {
  return (
    <div className="App">
       <div style={{display : "inline-block"}}>
        <NumberGuess />
        <GuessResult />
       </div>
    </div>
  );
}

export default App;
