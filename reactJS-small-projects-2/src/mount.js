// import React, { Component } from 'react';
// import './App.css'; 

// class Counter extends React.Component {
  
//     constructor(props) {
//         super(props);

//         this.state = {
//             seconds: 0,
//             minutes: 0
//         };
//         console.log('This is constructor')
//     }

//     componentDidMount(){
//         this.intervalCounter = setInterval(() => {
//             this.setState((state) => {
//                 return {
//                     seconds: state.seconds + 1,
//                 }
//             })
//         }, 1000)
//         console.log('This is Did Mount')
//     }
    
//     componentWillUnmount () {
//         clearInterval(this.intervalCounter);
//     }


//     render(){
//         return (
//             <div className="App">
//                 {this.state.counter}
//                 <Seconds seconds={ this.state.seconds}/>
//             </div>
//         )
//     }
// }

// class Seconds extends React.Component {
//     constructor(props){
//         super(props)
//     }

//     shouldComponentUpdate() {
//         return this.props.counter % 5 != 0;
//     }

//     render () {
//         return (
//             <div></div>
//         )
//     }

// }

// export default Counter;

// componentWillReceiveProps(){
//     console.log('This is Will Receive Props')
// }

// componentWillMount(){
//     console.log('This is Will Mount')
// }



// shouldComponentUpdate(){
//     console.log('This is Should Component Update');
//     return true
// }

// componentWillUpdate(){
//     console.log('This is Component Will Update');
// }

// componentDidUpdate(){
//     console.log('This is Component Did Update');
// }