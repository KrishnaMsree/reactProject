import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Employee from './components/Employee'
import App from './App.js'
// import HelloComp from './components/HelloComponent'
// import Product from "./components/exercise2product";
import Exercise3 from "./components/exercise3";
import Exercise4Child from "./components/exercise4child";
import AppComp from "./components/axiosComp";
import AddEmployee from "./components/addEmployee";
import EditEmployee from "./components/editEmployee";

ReactDOM.render(<EditEmployee />, document.getElementById('root'));



















// const prodId = 1008;
// const product = {
//     prodId : 1000,
//     prodName : 'Mobile'
// }
// const valid = true;
// const image = 'chowpic.jpg'
// const element = <h1>Hello World</h1> ;
// const ele = <h3>Product Id : {product.prodId} and product Name : {product.prodName}</h3>;
// const ele = <h3>{valid?product.prodName:product.prodId}</h3>;
// ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(ele, document.getElementById("root"));
// const ele1 = <img src={image} alt="Chow Pic image is not found" width="30%" height="30%"></img>;

// function generateJSX(){
//     if(new Date().getHours()<12){
//         console.log("hello", new Date().getHours());
        
//         return <h1>Good Morning! Hello World</h1>
//     }
//     else{
//         return <h1>Good Evening! Hello World</h1>
//     }
// }

// function forLoop(){
//     var array = [];
//     for(let i = 0;i<3;i++){
//         array.push("Very good dear ")
//     }
//     return array
// }
// function display(){

//     return (
//         <div>
//             This is inside div tag<span> I wanna tell u something</span>
//             {generateJSX()}
//             This is after generate function
//             <div>{forLoop()}</div>
//             This is after For Loop...
//         </div>
//     )
// }

// function getEmployeeDetails(){
//     const emp1 ={
//         id:1001,
//         name:"Kalyan",
//         age: 24,
//         salary: 30000
//     }
//     const emp2 = {
//         id:1002,
//         name:"Krishna",
//         age: 25,
//         salary: 30000        
//     }
//     const element = (
//         <div>
//             <ol>
//                 <li>
//                     Name : {emp1.name}<br/>
//                     Id : {emp1.id} <br/>
//                     Age : {emp1.age} <br/>
//                     Salary : {emp1.salary} <br/>
//                     <img src="kalyan.jpg" alt="Kalyan image" width="20%" height="20%"></img> <br/>
//                     <a href="#">Edit Details</a>
//                 </li>
//                 <li>
//                     Name : {emp2.name}<br/>
//                     Id : {emp2.id} <br/>
//                     Age : {emp2.age} <br/>
//                     Salary : {emp2.salary} <br/>
//                     <img src="krishna.jpg" alt="Krishna image" width="20%" height="20%"></img> <br/>
//                     <a href="#">Edit Details</a>
//                 </li>
//             </ol>

//         </div>
//     )
//     return element
// }
// const today=new Date().getDay();
// var element;
// if(today===0){ //Sunday has 0 value for Day 
//     element=<h1>Happy holiday</h1>
// }
// else{
//     element=<h1>Happy coding!</h1>
// }

// const empArray = [
//     { empId: 100, empName: "Kirk", age: 30 },
//     { empId: 101, empName: "James", age: 31 },
//     { empId: 102, empName: "Robert", age: 32 },
//     { empId: 103, empName: "Dave", age: 50 },
//     { empId: 104, empName: "Rob", age: 40 }
// ]

// function generateTable(){
    // var rowArr = [];
    // for(let i = 0 ; i<empArray.length;i++){
    //     var row = (
    //         <tr>
    //             <td>{empArray[i].empId}</td>
    //             <td>{empArray[i].empName}</td>
    //             <td>{empArray[i].age}</td>
    //         </tr>
    //     )
    //     rowArr.push(row)
    // }
//     var rowArr = empArray.map((emp)=>{
//         return (    
//             <tr>
//                 <td>{emp.empId}</td>
//                 <td>{emp.empName}</td>
//                 <td>{emp.age}</td>
//             </tr>
//         )
//     })
//     return (
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>EmpId</th>
//                     <th>Name</th>
//                     <th>Age</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {empArray.map((emp)=><tr key={emp.age}>
//                 <td>{emp.empId}</td>
//                 <td>{emp.empName}</td>
//                 <td>{emp.age}</td>
//             </tr>)}
//             </tbody>
//         </table>
//     )
// }

// const button = <button className="btn btn-primary" onClick={submit}>Submit</button>
// function submit(){
//     console.log("You have clicked me");
    
// }

// function display() {
//     return (
//         <div>
//             <span className="text-danger">Welcome to React App</span><br/>
//             <button className="btn btn-primary" onClick={submit}>Submit</button>
//         </div>
//     )
// }
// function submit(){
//     return (
//         <h4 className="text-center text-secondary">This is my first React App</h4>
//     )
// }

// function myFunction() {
//     var jsxArr = []
    
//     for (let i = 5; i > 0; i--) {
//       jsxArr.push(<li> Hello! {i} </li>)
//     }
  
//     return <div>
//     <ol>  {jsxArr}  </ol>
//     </div>;
//   }
// ReactDOM.render(myFunction(), document.getElementById("root"));

// function displayBooks() {
//     return <ol> 
//     <li>Rich Dad, Poor Dad</li>
//     <li>The Alchemist</li>
//     {displayMoreBooks()}
//     </ol>
//   }

// function greet() {
//   return <div>
//     <h2>Welcome to the library!</h2>
//     <p>Explore new titles</p>
//   {displayBooks()}
// </div>
// }

// function displayMoreBooks() {
//   return <div>
//     <li>Deception</li>
//     <p>The Prophet</p>
//     </div>
// }

// EXERCISE 1
// const products = [
//     {
//         title : "Angels and Demons",
//         Publisher : "Penguin Random House",
//         Author : "Dan Brown",
//         price : 409,
//         prodId : 2012
//     },
//     {
//         title : "Norse Mythology",
//         Publisher : "Bloomsbury",
//         Author : "Neil Gaiman",
//         price : 300,
//         prodId : 2019
//     }
// ]
// function exercise1(){
//     return (
//         <div>
//             <h3 className="text-center text-primary">Featured Titles</h3>
//             <div className="row">
//             {products.map((product)=>
//               <div className="col-4 offset-1">
//                 <div className="card">
//                 <div className="card-body" key="{product.prodId}">
//                 <h4 className="card-title text-center">{product.title}</h4>
//                 <p className="card-text">
//                 <span>Author: {product.Author}</span><br/>
//                 <span>Publisher: {product.Publisher}</span><br/>
//                 {product.price>400?<span>Price: {product.price} <span className="text-success">- Bestseller!</span></span>:<span>Price: {product.price}</span>}
//                 </p> 
//                 <span>Product ID: {product.prodId}</span><br/>
//             </div>
//             </div>
  
//               </div>
//             )}
  
//         </div>
            
//         </div>
//     )
// }


// ASSIGNMENT 1

// const courses = [
//     {title : 'HTML5',author : 'Dan Brown', category : 'Web Development'},
//     {title : 'CSS',author : 'Robin Cook', category : 'Web Development'},
//     {title : 'JavaScript',author : 'Dan Brown', category : 'Programming'}
// ]
// function featuredCoursesDetails(){
//     return (
//         <div>
//             <h3 className="text-center text-primary">Featured Titles</h3>
//             <div className="row">
//             {courses.map((cou)=>
//               <div className="col-4">
//                 <div className="card">
//                 <div className="card-body" key="{cou.title}">
//                 <h4 className="card-title text-center">{cou.title}</h4>
//                 <p className="card-text">
//                 <span>Author: {cou.author}</span><br/>
//                 <span>Category: {cou.category}</span><br/>
//                 </p> 
//                 <button className="btn btn-success">Summary</button>
//             </div>
//             </div>
//             </div>
//             )}
//         </div>
//     </div>
//     )
// }
// const info = [
//     {cn:"php",category:"server scripting",Author:"richard james"},
//     {cn:"angular 6",category:"web development",Author:"Kirt Hamett"},
//     {cn:"node.js",category:"server side js",Author:"Ryan Darl"},
//     {cn:"Bootstrap",category:"UI development",Author:"Mark Hill"},
//     {cn:"Python",category:"Programming",Author:"Guido van Rossoum"}
//   ]
// function courseCatalog(){
//     return (
//         <table className="table table-striped table-dark">
//             <thead>
//                 <tr>
//                     <th>Course Name</th>
//                     <th>Category</th>
//                     <th>Author</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {info.map((course)=>
//                     <tr key="course.cn">
//                         <td>{course.cn}</td>
//                         <td>{course.category}</td>
//                         <td>{course.Author}</td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>
//     )
// }

// function details(){
//     return (
//         <div className="row">
//             <div className="col-7">
//                 {featuredCoursesDetails()}
//             </div>
//             <div className="col-5">
//                 <h3 className="text-center">Course Catalog</h3>
//                 {courseCatalog()}
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(<HelloComp fruit="Pomagranate" name = "Kalyan"></HelloComp>, document.getElementById('root'));