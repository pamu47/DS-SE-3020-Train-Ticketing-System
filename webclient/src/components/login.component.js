import React, {Component} from "react";
import { login } from "./functions";

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            email : '',
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
            email : this.state.email,
            password : this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    }



    render() {
        return (
            <div>
                <div className="row" style={{marginTop:60}}>
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="jumbotron">
                            <h1 className="display-5">Sign in..</h1>
                            <hr className="my-4"></hr>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Email : </label>
                                    <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Password : </label>
                                    <input className="form-control" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-success" type="submit" value="Sign in"/>
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