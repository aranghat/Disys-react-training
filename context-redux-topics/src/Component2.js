import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
export default function Component2(){

    let theContext = useContext(ThemeContext);
    let language = useContext(LanguageContext);

    function getHeading(){
        if(language === "eng") 
        return "Hello World";
        if(language === "tml") 
        return "வணக்கம் உலகம்";
        if(language === "mal")
         return "ഹലോ വേൾഡ്";
    }

    return ( <h1 style={theContext.style}>
            {getHeading()}
        </h1>
    )   
}