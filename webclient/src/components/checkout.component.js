import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import jwt_decode from 'jwt-decode'
import '../App.css'

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export default class Checkout extends React.Component {

    constructor(){
        super()

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeQuantity = this.onChangeQuantity.bind(this)

        this.state = {
            full_name : '',
            email : '',
            tel_no : '',
            from : '',
            to : '',
            nic : '',
            quantity: ''
        }

    }

    onSubmit(e){
        e.preventDefault()
        this.setState ({
            full_name : this.state.full_name,
            email : this.state.email,
            tel_no : this.state.tel_no,
            from : this.state.from,
            to : this.state.to,
            nic : this.state.nic,
            quantity : this.state.quantity,
            price : this.state.quantity * 250
        })
    }

    onChangeQuantity(e){
        this.setState ({
            quantity : e.target.value
        })
    }

    onChange(e){
        e.preventDefault()

        //Calculating the discount if the user is a government employee
        var radio = document.getElementsByName('optionRadios');
        if (radio[0].checked){
            this.setState({
                quantity : this.state.quantity,
                price : this.state.quantity * 250 *(80/100)
            })
            document.getElementById('div1').style.display = 'block';
        }else if(radio[1].checked){
            this.setState({
                quantity : this.state.quantity,
                price : this.state.quantity * 250 
            })
            document.getElementById('div1').style.display = 'none';
        }
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

    //Setting up stripe checkout
    onToken = (token) => {
        fetch('/save-stripe-token', {
        method: 'POST',
        body: JSON.stringify(token),
        }).then(response => {
        response.json().then(data => {
            alert(`We are in business, ${data.email}`);
        });
        });
    }

  render() {
    return (
      
      <div>
        <div>
            <div className="row" style={{ marginTop: 60 }}>
                <div className="col-2"></div>
                <div className="col-8">
                    <div class="card text-center">
                        <div class="card-header" style={{ backgroundColor: "LightGray" }}>
                            Welcome
                    </div>
                        <div class="card-body">
                            <h2 class="card-title">Train Ticket Reservation System</h2>
                            you are almost there <br/><br/>
                            <form noValidate>
                            <ul class="list-group">
                                <li class="list-group-item">From  :  {localStorage.getItem("from")}</li>
                                <li class="list-group-item">To  :  {localStorage.getItem("to")}</li>
                                <li class="list-group-item">Quantity  :  <input className="text-center" type="text" value={this.state.quantity} onChange={this.onChangeQuantity} name="quantity" /></li>
                            </ul>
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
                                    <input className="form-control  text-center" placeholder="NIC" type="text" name="nic" />
                                    <button className="btn btn-primary">Store NIC</button>
                                </div>
                                
                            </form>
                        </div>
                        <div class="card-footer text-muted" style={{ backgroundColor: "LightGray" }}>
                            {date}
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>

        <div class="card-deck" style={{ marginTop: 30 }}>
            <div class="card text-center">
                <div class="card-body">
                <h4 class="card-title">Rs. {this.state.price}</h4>
                <h3 class="card-text">Pay using your Credit card</h3>
                <p className="card-text">
                    <StripeCheckout
                        token={this.onToken}
                        stripeKey="pk_test_NwDyNtEZ6cABXYM8OM9eqvsr006ZlfJIbY">
                            <button className="btn btn-success">
                                Pay here
                            </button>
                    </StripeCheckout>
                </p>
                <p class="card-text"><small class="text-muted">{localStorage.getItem("tel_no")}</small></p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                <h4 class="card-title">Rs. {this.state.price}</h4>
                <h3 class="card-text">Pay using your dialog mobile.</h3>
                <p className="card-text">
                    <button className="btn btn-success">
                        Pay here
                    </button>
                </p>
                <p class="card-text"><small class="text-muted"></small></p>
                </div>
            </div>
            </div>
        </div>
    )
  }
}