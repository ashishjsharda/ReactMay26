import React, { Component } from 'react';
class Logging extends Component {

    handleClick=()=>{
        console.log("Hi ,You are in click method");
    };
    render() { 
        return (<div>
            <h1>Click the button</h1>
           
            <button onClick={this.handleClick}> Click Me</button>
        </div>  );
    }
}
 
export default Logging;