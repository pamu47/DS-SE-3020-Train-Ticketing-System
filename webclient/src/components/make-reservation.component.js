import React, {Component} from "react";
import jwt_decode from 'jwt-decode'
//import axios from 'axios'
import { reserve } from "./functions";
import '../App.css'



export default class MakeReservation extends Component{
    constructor(){
        super()
        this.state = {
            full_name : '',
            email : '',
            tel_no : '',
            from : 'Kandy',
            to : 'Fort',
            nic : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onTelChange = this.onTelChange.bind(this)
        localStorage.setItem("from", this.state.from)
        localStorage.setItem("to", this.state.to)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        localStorage.setItem([e.target.name], e.target.value)
        var radio = document.getElementsByName('optionRadios');
        if (radio[0].checked){
            document.getElementById('div1').style.display = 'block';
        }else if(radio[1].checked){
            document.getElementById('div1').style.display = 'none';
        }
        
    }
    onTelChange(e){
        this.setState({
            tel_no : e.target.value
        })
        localStorage.setItem("tel_no", this.state.tel_no)
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

        // var access_key = 'ccee5511ed486d32896a5febdc6a26a9';
        // var phone_number = this.state.tel_no;
        // axios.get('http://apilayer.net/api/validate?access_key=ccee5511ed486d32896a5febdc6a26a9&number=61384579631&country_code=&format=1')
        //             .then(res=>{
                        
        //                 console.log(res.valid);
        //                 console.log(res.country_code);
        //                 console.log(res.carrier);
        //             })

        reserve(booking).then(res => {
            this.props.history.push(`/checkout`)
            
        })
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        this.setState({
            _id : decode._id,
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
                                    <input className="form-control" type="text" name="tel_no" value={this.state.tel_no} onChange={this.onTelChange}/>
                                </div>
                                <div className="form-group">
                                    <label>From : </label>
                                    <input className="form-control" type="text" name="from" value={this.state.from}  onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>To : </label>
                                    <input className="form-control" type="text" name="to" value={this.state.to}  onChange={this.onChange} />
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
                                    <button className="btn btn-success">Proceed</button>
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