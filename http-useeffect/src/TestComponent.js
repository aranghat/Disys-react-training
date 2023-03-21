import { Component } from "react";

export class TestComponent extends Component
{
    constructor(props){
        super(props);
        console.debug("Test Component Constructor");
        
        this.state = { counter : 0, state2 : 10 };
    }

    render(){
        return (
            <div>
                <h1>Test Component</h1>
                    {this.state.counter}
                    {new Date().toLocaleTimeString()}
                   <button
                    onClick={() =>
                        this.forceUpdate()
                    }>
                    Force componentDidUpdate
                   </button>
                   
                    <button 
                    onClick={() => 
                    this.setState(
                        { counter : 
                        this.state.counter + 1 })}>    
                    Increment
                    </button>
                
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState){
       console.log(this.state.counter);
       console.log(nextState.counter);
       return true;
    }

    componentDidMount(){
        console.log("Test Component Mounted");
    }

    componentDidUpdate(){
        console.log("Test Component Updated");
    }

    componentWillUnmount(){
        console.log("Test Component Unmounted");
    }
}