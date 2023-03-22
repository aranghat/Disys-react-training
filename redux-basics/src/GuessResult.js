import { useSelector } from "react-redux"

export default function GuessResult(){

    let numberGuessed = useSelector(state =>
                     state.numberstate
                          .numberGuessed);

    return(
        <div>
            {numberGuessed == 3 && 
                <h1>You guessed it right</h1>}
            {numberGuessed != 3 &&
                <h1>You guessed {numberGuessed}
                , it wrong</h1>}
        </div>
    )
}