import React, {Component} from "react";

export default class Login extends Component {

    render() {
        return (
            <div>
                <div className="row" style={{marginTop:60}}>
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="jumbotron">
                            <h1 className="display-5">Sign in..</h1>
                            <hr className="my-4"></hr>
                            <form>
                                <div className="form-group">
                                    <label>Username : </label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>Password : </label>
                                    <input className="form-control" type="password"/>
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