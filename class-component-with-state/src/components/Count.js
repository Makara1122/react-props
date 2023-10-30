import React from 'react'

class Counter extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        };
    }


    render() {
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={()=> this.increment()}>Increment</button>
            </div>
        )
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }
}
export default Counter;
