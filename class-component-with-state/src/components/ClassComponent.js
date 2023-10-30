import React from 'react'

class App2 extends React.Component {
    constructor(){
        super();
        this.state = {
            color: 'red',
        }
    }
    render(){
        return(
            <div>Hello my favorite color is {this.state.color}</div>
        )
    }


}
export default App2;
