import Component2 from "./Component2";

export default function Component1(props){
    return (
        <div>
            <h1>Component 1</h1>
            <div><Component2 style={props.style} /></div>
        </div>
    )
}