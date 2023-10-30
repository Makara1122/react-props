import React from 'react'
class Counter4 extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    render(){
        let message = '';
        if (this.state.count >= 10) {
            message = 'Count is greater than or equal to 10';
        }
        return(
            <>
            <h2>
                Counter: {this.state.count}
            </h2>
            <button
            onClick={()=>{
                this.increment()
            }}
            >Increment</button>
            <p>{message}</p>
            </>
        )
     
    }
    increment(){
        this.setState({count: this.state.count +1})
    }
}
export default Counter4;