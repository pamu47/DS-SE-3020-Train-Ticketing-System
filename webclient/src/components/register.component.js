import React, {Component} from "react";

export default class Register extends Component {

    render() {
        return (
            <div>
                <div className="row" style={{marginTop:60}}>
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="jumbotron">
                            <h1 className="display-5">Sign up..</h1>
                            <hr className="my-4"></hr>
                            <form>
                                <div className="form-group">
                                    <label>Full Name : </label>
                                    <input className="form-control" type="text" name="full_name" />
                                </div>
                                <div className="form-group">
                                    <label>Email : </label>
                                    <input className="form-control" type="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label>Username : </label>
                                    <input className="form-control" type="text" name="username" />
                                </div>
                                <div className="form-group">
                                    <label>Password : </label>
                                    <input className="form-control" type="password" name="password" />
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