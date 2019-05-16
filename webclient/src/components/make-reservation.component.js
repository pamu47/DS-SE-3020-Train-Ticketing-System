import React, {Component} from "react";
import jwt_decode from 'jwt-decode'
import { reserve } from "./functions";
import '../App.css'



export default class MakeReservation extends Component{
    constructor(){
        super()
        this.state = {
            full_name : '',
            email : '',
            tel_no : '',
            from : '',
            to : '',
            nic : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})

        var radio = document.getElementsByName('optionRadios');
        if (radio[0].checked){
            document.getElementById('div1').style.display = 'block';
        }else if(radio[1].checked){
            document.getElementById('div1').style.display = 'none';
        }
        
    }

    onSubmit(e){
        e.preventDefault();
        const booking = {
            full_name : this.state.full_name,
            email : this.state.email,
            tel_no : this.state.tel_no,
            from : this.state.from,
            to : this.state.to,
            nic : this.state.nic
        }

        reserve(booking).then(res => {
            this.props.history.push(`/`)
            
        })
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
            <div>
                <div className="row" style={{marginTop:60}}>
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="jumbotron">
                            <h1 className="display-5">Reservation</h1>
                            <hr className="my-4"></hr>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Full Name : </label>
                                    <input className="form-control" name="full_name" type="text" value={this.state.full_name} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Email : </label>
                                    <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Telephone Number : </label>
                                    <input className="form-control" type="text" name="tel_no" value={this.state.tel_no} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>From : </label>
                                    <input className="form-control" name="from" type="text" value={this.state.from} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>To : </label>
                                    <input className="form-control" name="to" type="text" value={this.state.to} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Are you a goverment employee?</label>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" onChange={this.onChange} name="optionRadios" id="optionYes" value="Yes" />
                                        <label className="form-check-label" for="optionYes">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="optionRadios" onChange={this.onChange} id="optionNo" value="No" />
                                        <label className="form-check-label" for="optionNo">No</label>
                                    </div>
                                </div>
                                <div className="form-group hide" id="div1">
                                    <label>Please enter your NIC : </label>
                                    <input className="form-control" type="text" name="nic" value={this.state.nic} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-success" type="submit" value="Proceed"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}