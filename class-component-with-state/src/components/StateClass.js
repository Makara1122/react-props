import React from 'react'


class App3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            change: true,
        }
    }
    render(){

        return(
            <div>
                <br/>
                <button
                onClick={() => {this.setState({change: !this.state.change})}}
                >Click here</button>
                {this.state.change ? (
                    <h1>Welcome to Makara study time</h1>
                ) : (
                    <h2>A computer science portal for Makara</h2>
                )}
            </div>
        )
    }


}
export default App3;
