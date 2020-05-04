// import React from 'react';
// class HelloComp extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             counter : 0,
//             message : ''
//         }
//     }
//     incrementCounter = () => {
//         this.setState({counter : this.state.counter + 1, message:"Button Clicked" });
//         console.log("Button Clicked," , this.state.counter);
// };

//     render(){
//         return (
//             <React.Fragment>
//             <button className="btn btn-primary" onClick={this.incrementCounter}>Button Increment</button>
//             <h3>{this.state.counter} {this.state.message}</h3>
//             <h4 className="text-center">
//             <span className="text-primary">{this.props.name}'s</span> favourite fruit is
//             <span className="text-primary"> {this.props.fruit}</span></h4>
//             </React.Fragment>
//         );
//     }
// }
// export default HelloComp;

// import ReactDOM from "react-dom";
// import React from 'react';

// class Timer extends React.Component{
//     constructor(props){
//         super(props);
//         this.start = this.start.bind(this);
//         this.state = {secondsElapsed: new Date().getSeconds()};
//     }                                                  
//     start(){
//         this.setState ({secondsElapsed: this.state.secondsElapsed + 1});
//     }
//     componentWillMount(){
//         alert('Component mounted');
//     }

//     componentDidMount(){
//         this.interval = setInterval(this.start, 1000);
//     }

//     render(){
//         return (<div>
//                     <h2>Seconds Elapsed: {this.state.secondsElapsed}</h2>
//                 </div>);
//         }
//     } 

// export default Timer;
// var course = [  {id: 1, name: "Angular", educator: "Rob"},
//                 {id: 2, name: "ReactJS", educator: "John"},
//                 {id: 3, name: "Ajax", educator: "Mack"}
//             ];
// class Educator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { courseData: course, selected: false };
//         console.log("Initialization Phase: 'constructor()' executed");
        
//     }
//     componentWillMount = () => {
//         console.log("Mounting Phase: 'componentWillMount()' executed");  
//     }
    
//     render = () => {
//         var users = this.state.courseData;
//         console.log("Mounting Phase: 'render()' executed");
//         return (
//         <div>
//             <h4>UI Courses list</h4>
//             <div> { 
//                 users.map((userDetails)=> { 
//                     return (<div key={userDetails.id}>
//                         <b>Course: </b>{userDetails.name} <br/> 
//                         <b>Educator: </b>{userDetails.educator} <br/>
//                         <button onClick={this.clickHandler}>Details</button><br/><br/>
//                     </div>);
//                 })}
//             </div>
//             <button onClick={this.exitComponent}>Exit</button>
//         </div>
//         );  
//     }
//     componentDidMount = () => {
//         console.log("Mounting Phase: 'componentDidMount()' executed");  
//     }
//     clickHandler = () => {
//         console.log("Details button is clicked, state will change...");
//         this.setState({ selected: true });
//     }
//     exitComponent = () => {
//         console.log("Exit button is clicked, component will be destroyed");
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//     }
//     componentWillUnmount = () => {
//         console.log("Un-Mounting Phase: 'componentWillUnmount()' executed");
//     }
// }
// export default Educator;
import React, { Component } from 'react';
import '../index.css';
import Employee from './Employee';
class App extends Component {
  constructor() {
    super();
    const emp1 = {
      "empId": 100,
      "empName": "Jack",
      "age": 30,
      "salary": 50000,
      "image": "kalyan.jpg",
      "achievements": "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well"
    }
    const emp2 = {
      "empId": 101,
      "empName": "Jane",
      "age": 24,
      "salary": 40000,
      "image": "krishna.jpg",
      "achievements": "No major achievements so far"
    }
    this.empArr = [emp1, emp2]
  }
  render() {
    return (
      <div>
      <h3 className="text-center text-primary">Employee Details</h3>
        {this.empArr.map(emp => <Employee key={emp.empId} emp={emp}/>)}
      </div>
    );
  }
}
export default App;
