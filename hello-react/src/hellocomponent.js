import TodaysQuote from "./todaysquote";

export default function
HelloComponent(){
   let quotes = [
         {text : "Its a great day", author:"John"},
         {text : "Its a wonderful day", author:"Mary"},
         {text: "Its a fantastic day",author:"Peter"}
   ]

    return <div> <h1>Hello World! 
        {new Date().toDateString()}
        </h1>
        {1+1} = 2
            <h1>Another date</h1>
            {
                quotes.map((quote, index) => {
                    return <TodaysQuote
                    quote={quote}
                    index = {index}
                    />
                })
            }
            </div>
    ;
}

