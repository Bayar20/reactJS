import React, { Component } from 'react';
import './App.css';

class App2 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  click = () => {
    this.setState({ 
      clicks: this.state.clicks + 1
    })
  }
  
  render(){
    return (
      <div className="App">
        <button onClick={() => this.click()}>
          Click me!
        </button>
          <h1>You clicked {this.state.clicks} times!</h1>
      </div>
    )

  }
}

export default App2;