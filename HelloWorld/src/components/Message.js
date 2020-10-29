import React, { Component } from 'react'

//How state works
//1. create a state object and initialise it
    // this is usually done in the class constructor
//2. within the constructor we call the super method
    // this is required as we are extending Reacts component class and a call has to be made to the base class constructor
//3. Next we need to create the state Object


class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome XYZ'
        }
    }

    changeMessage(){
        this.setState({message: 'Thank you for subscribing XYZ!'})
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>subscribe</button>
            </div>
        )
    }
    //using props (this is immutable and therefore we need to utilise state)
    // render() {
    //     return (
    //     <div>
    //     <h1>Hello Addy!</h1>
    //     <p>{this.props.message}</p>
    //     {this.props.children}
    //     </div>
    //     )
    // }
}



export default Message