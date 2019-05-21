import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "./img/train-ticket.png"

import MakeReservation from './components/make-reservation.component'
import Home from './components/home.component'
import Login from './components/login.component'
import Register from './components/register.component'
import Profile from './components/profile.component'
import Checkout from './components/checkout.component'
	
class App extends Component {


  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"LightGray"}}>
          <a className="navbar-brand" href="/">
          <img src={logo} width={40} height={40} alt=""/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={MakeReservation} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register}/>
        <Route path="/profile" component={Profile} /> 
        <Route path="/checkout" component={Checkout} />
      </div>
      </Router>
    );
  }
}

export default App;
