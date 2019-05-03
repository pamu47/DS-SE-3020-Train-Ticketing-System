import React, {Component} from "react";
import {Link} from "react-router-dom"

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


export default class Home extends Component{

  logOut(e){
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }

    render(){
      const loginLink = (
        <div>
        <p>Please sign in  or sign up to proceed</p>
        <Link to="/signin" class="btn btn-success" style={{marginRight:15}}>Sign in</Link>
        <Link to="/signup" class="btn btn-info">Sign up</Link>
        </div>
      )

      const reservationLink = (
        <div>
          <Link to="/create" class="btn btn-primary" style={{marginRight:15}}>Make a reservation</Link>
          <button onClick={this.logOut.bind(this)} class="btn btn-danger">Logout</button>
        </div>
      )
        return(
            <div className="row" style={{marginTop:75}}>
            <div className="col-2"></div>
                <div className="col-8">
                  <div class="card text-center">
                    <div class="card-header" style={{backgroundColor:"LightGray"}}>
                      Welcome
                    </div>
                    <div class="card-body">
                      <h2 class="card-title">Train Ticket Reservation System</h2>
                      {localStorage.usertoken ? reservationLink : loginLink}
                    </div>
                    <div class="card-footer text-muted" style={{backgroundColor:"LightGray"}}>
                      {date}
                    </div>
                  </div>
                </div>
            <div className="col-2"></div>
            </div>
        );
    }
}