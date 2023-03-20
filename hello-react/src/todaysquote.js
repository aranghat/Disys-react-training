export default function 
TodaysQuote(p)
//TodaysQuote({quoteText,index})
{

    let x = 0;
    function sayHello(){
        alert(`${p.quote.text} was told by
            ${p.quote.author}`);
        x = x+1;
    }

    return (
    <div>
         <h1>{p.index} : {p.quote.text}</h1>
         <h2>{p.quote.author}</h2>
         <button onClick={sayHello}>Say a Message</button>
    </div>)
}