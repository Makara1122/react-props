import React from 'react'

class Counter2 extends React.Component{
    constructor(){
        super();
        this.state = {
            count:5,
        }
    }

    render(){
        return(
            <div>
                <h1>Count2: {this.state.count}</h1>
            <button onClick={()=>this.increment2()}>Increment</button>
            </div>
        )
    }

    increment2(){
        this.setState({count: this.state.count + 5});
    }
}
export default Counter2;
