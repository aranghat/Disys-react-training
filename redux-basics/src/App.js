
import NumberGuess from './NumberGuessComponent';
import GuessResult from './GuessResult';

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
