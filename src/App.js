// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Exercise4Child from "./components/exercise4child";
const Home = () => <h2> Home </h2>;
const NewsFeed = () => <h2> News Feed </h2>;
const Contact = () => <h3>Contact Us</h3>
class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link className="navbar-brand">Learning Portal</Link>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to={'/all'}>View All Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/addbook'}>Add A Book</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/contact'}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Route path="/" render = {()=><Redirect to={'/all'}/>}/>
            <Route path = '/all' render = {()=><h3 className="text-success">Keep checking! New Books will be added every week!</h3>}/>
            <Route path = '/addbook' render = {()=><h3 className="text-danger">Sorry! We are still preparing this feature...</h3>}/>
            <Route path = '/contact' render = {()=><div><h3 className="text-primary">Get in touch with us</h3><br/><p >We are open from 9:00 am to 5:00 pm <br/>Contact us at ---<br/>Email Id : krishna@gmail.com</p></div>}/>
          </div>
 
        </React.Fragment>
      </Router>
    );
  }
}
export default App




{/* <nav>
        <Link to={'/home'}> Home </Link><br />
        <Link to={'/news'}> News feed </Link><br />
        <Link to={'/contact'}> Contact </Link><br />
        <Link to={'/path'}> Path </Link><br />
        <Link to={'/path/path1'}> Path/Path </Link><br />
        <Link to={'/exercise'}> Exercise </Link><br />
</nav> */}
{/* <div>
<Route exact path="/" render={() => (console.log('/'), <Redirect to="/home" />)} />
<Route path={'/path'} render= {() => <h3>Hello! The path is '/path'</h3>} />
<Route exact path={'/path/path1'} render= {() => <h3>Hello! The path is'/path/path'</h3>} /> 
<Route path="/home" component={Home}/>
<Route path="/news" component={NewsFeed}/>
<Route path="/contact" render={() => <h3>Contact Us</h3>}/>
<Route path="/exercise" component={Exercise4Child}/>
</div> */}
