import React from 'react'

class App4 extends React.Component {
    render(){

        return(

            <h1>{this.props.data}</h1>
        )
    }
}

class Example extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chagne: true,
        }
    }
    render(){

        return(
            <div>
                <button
                onClick={() => {
                    this.setState({chagne: !this.state.chagne})
                }}
                >Click here</button>
                {this.state.chagne ? (
                    <App4 data= "Welcome to Makara"/>
                ):(
                    <App4 data= "A computer Science Portal For makara" />
                )}
            </div>
        )
    }
}
export default Example;