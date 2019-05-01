import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./img/train-ticket.png"

import MakeReservation from './components/make-reservation.component'
import Home from './components/home.component'
import Login from './components/login.component'
import Register from './components/register.component'
	
class App extends Component {


  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
          <img src={logo} width={40} height={40} alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Reserve</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={MakeReservation} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register}/>
      </div>
      </Router>
    );
  }
}

export default App;
