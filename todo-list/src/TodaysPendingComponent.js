import { Component } from 'react';
export default class TodaysPendingComponent extends Component {

    constructor(props) {
        super(props);  
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Today's Pending Items</h1>
                {this.state.counter}
                <button onClick=
                {() => this.setState({counter : this.state.counter + 1})}>Increment</button>
            </div>
        )
    }
}