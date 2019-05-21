import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import jwt_decode from 'jwt-decode'

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export default class Checkout extends React.Component {

    constructor(){
        super()

        this.onSubmit = this.onSubmit.bind(this)
        this.setPrice = this.setPrice.bind(this)
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

    setPrice(e){
        e.preventDefault()
        this.setState({
            quantity : this.state.quantity,
            price : this.state.quantity * 250 
        })
    }

    onChangeQuantity(e){
        this.setState ({
            quantity : e.target.value
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

  // ...

  render() {
    return (
      // ...
      <div>
        <div>
            <div className="row" style={{ marginTop: 75 }}>
                <div className="col-2"></div>
                <div className="col-8">
                    <div class="card text-center">
                        <div class="card-header" style={{ backgroundColor: "LightGray" }}>
                            Welcome
                    </div>
                        <div class="card-body">
                            <h2 class="card-title">Train Ticket Reservation System</h2>
                            you are almost there <br/><br/>
                            <form noValidate onSubmit={this.setPrice}>
                            <ul class="list-group">
                                <li class="list-group-item">From  :  {localStorage.getItem("from")}</li>
                                <li class="list-group-item">To  :  {localStorage.getItem("to")}</li>
                                <li class="list-group-item">Quantity  :  <input className="text-center" type="text" value={this.state.quantity} onChange={this.onChangeQuantity} name="quantity" /></li>
                                <button className="btn btn-success">Calculate</button>
                            </ul>
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
        <div class="card-deck" style={{ marginTop: 75 }}>
            <div class="card text-center">
                <div class="card-body">
                <h4 class="card-title">Rs. {this.state.price}</h4>
                <h3 class="card-text">Pay with your Credit card</h3>
                <p className="card-text">
                <StripeCheckout
                    token={this.onToken}
                    stripeKey="pk_test_NwDyNtEZ6cABXYM8OM9eqvsr006ZlfJIbY">
                        <button className="btn btn-primary">
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
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                <h4 class="card-title">Rs. {this.state.price}</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
        </div>
    )
  }
}