// import HelloComp from './HelloComponent'
// import React from "react"
// class Employee extends React.Component {
//     constructor() {
//         super();
//         const emp1 = {
//             "empId": 100,
//             "empName": "Kalyan",
//             "age": 30,
//             "salary": 50000,
//             "image": "kalyan.jpg",
//             "achievements": "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well"
//         }
//         const emp2 = {
//             "empId": 101,
//             "empName": "Krishna",
//             "age": 24,
//             "salary": 40000,
//             "image": "krishna.jpg",
//             "achievements": "No major achievements so far"
//         }
//         this.empArr=[emp1,emp2]
//         this.state = {
//             selectedEmp : null
//         }
//     }
//     createCard(emp) {
//         var note = null;
//         var achievements = null;
//         if (emp.age < 25) {
//           note = <span className="text-info"> - Fresher</span>
//         }
//         if (this.state.selectedEmp == emp.empId){
//             achievements = <p><i> Achievements: {emp.achievements}</i><br/></p>
//         }
//         else{
//             achievements = <p></p>
//         }
      
//         return (
//           <div key={emp.empId} className="card" style={{ "width": 200 }}>
//             <img className="card-img-top" src={emp.image} height="200" alt="Card image cap" />
//             <div className="card-body">
//               <h5 className="card-title text-center">{emp.empName}</h5>
//               <p className="card-text">
//                 <span>Id: {emp.empId}</span><br />
//                 <span>Age: {emp.age}</span> {note}<br />
//                 <span>Salary: {emp.salary}</span><br />
//               </p>
//               {achievements}
//               <button type="button" className="btn btn-primary" onClick={()=>{this.setState({selectedEmp:null})}}>Hide</button>
//               <button type="button" className="btn btn-success" onClick={()=>{this.setState({selectedEmp:emp.empId})}}>View</button>
              
//             </div>
//           </div>
//         )
//       }
      
//       render(){
//           return (
//             <div>
//               <h3 className="text-center text-primary">Employee Details</h3>
//               {this.empArr.map(emp => {return this.createCard(emp)})}
//               <HelloComp></HelloComp>
//             </div>
//           )
//       }
// }
// export default Employee;

import React from "react"
class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false
        }
    }
    render() {
        var note = null;
        var achievements=null;
        if (this.props.emp.age < 25) {
            note = <span className="text-info"> - Fresher</span>
        }
        if(this.state.buttonClicked){
          achievements=this.props.emp.achievements;
        }
        else{
            achievements = ""
        }
        
        return (
            <div className="card" style={{ "width": 200 }}>
                <img className="card-img-top" src={this.props.emp.image} height="200" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.emp.empName}</h5>
                    <p className="card-text">
                        <span>Id: {this.props.emp.empId}</span><br />
                        <span>Age: {this.props.emp.age}</span> {note}<br />
                        <span>Salary: {this.props.emp.salary}</span><br />
                    </p>
                    <p><i>{achievements}</i></p>
                    <button type="button" className="btn btn-primary" onClick={()=>{this.setState({buttonClicked:false})}}>Hide</button>
                    <button className="btn btn-success" onClick={() => {
                        this.setState({ buttonClicked: true });
                    }}>View</button>
                </div>
            </div>
        )
    }
}
export default Employee;
