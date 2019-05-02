import React, {Component} from "react";


export default class MakeReservation extends Component{

    render(){
        return(
            <div>
                <div className="row" style={{marginTop:60}}>
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="jumbotron">
                            <h1 className="display-5">Reservation</h1>
                            <hr className="my-4"></hr>
                            <form>
                                <div className="form-group">
                                    <label>Full Name : </label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>Email : </label>
                                    <input className="form-control" type="email"/>
                                </div>
                                <div className="form-group">
                                    <label>From : </label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>To : </label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>Are you a goverment employee?</label>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="option" id="optionYes" value="Yes" />
                                        <label className="form-check-label" for="optionYes">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="option" id="optionNo" value="No" />
                                        <label className="form-check-label" for="optionNo">No</label>
                                    </div>
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