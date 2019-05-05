import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import {Link} from "react-router-dom"

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export default class Profile extends Component{
    constructor(){
        super()
        this.state = {
            full_name : '',
            email : '',
            username : ''
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        this.setState({
            full_name : decode.full_name,
            email : decode.email,
            username : decode.username
        })
    }

    render(){
        return(
            <div className="container" style={{marginTop : 50}}>
                <div class="card text-center">
                    <div class="card-header">
                        Welcome
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{this.state.full_name}</h5>
                        <p class="card-text">Welcome to online railway ticket reservation system. Click below button to make your reservation...</p>
                        <Link to="/create" class="btn btn-success">Make a Reservation</Link>
                    </div>
                    <div class="card-footer text-muted">
                        {date}
                    </div>
                </div>
            </div>
        )
    }

}