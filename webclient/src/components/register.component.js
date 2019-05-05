import React, {Component} from "react";
import { register } from "./functions";

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            full_name : '',
            email : '',
            username : '',
            password : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            full_name : this.state.full_name,
            email : this.state.email,
            username : this.state.username,
            password : this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/signin`)
            
        })
    }

    render() {
        return (
            <div>
                <div className="row" style={{marginTop:60}}>
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="jumbotron">
                            <h1 className="display-5">Sign up..</h1>
                            <hr className="my-4"></hr>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Full Name : </label>
                                    <input className="form-control" type="text" name="full_name" value={this.state.full_name} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email : </label>
                                    <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Username : </label>
                                    <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Password : </label>
                                    <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-success" type="submit" value="Sign up"/>
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