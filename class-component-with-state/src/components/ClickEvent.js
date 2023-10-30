import React from 'react'

class Counter3 extends React.Component {
    constructor(){
        super();
        this.state = {
            count:0,
        }
    }
    render(){

        return(
            <div>
                <button
                onClick={() => {
                    this.increment()
                }}
                >
                    +1
                </button>
                <h1>this is number: {this.state.count}</h1>
            </div>
        )
    }
    increment(){
         this.setState({count: this.state.count +1})
    }
}
export default Counter3;