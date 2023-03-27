import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import Footer from "../../Footer"

import { Link } from 'react-router-dom';

export class Checkout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      errors: {},
    }
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "First name cannot be empty"

    }
    else if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "First name must be only letters";

      }
    }
    if (!fields["secondname"]) {
      formIsValid = false;
      errors["secondname"] = "Second name cannot be empty"

    }
    else if (typeof fields["secondname"] !== "undefined") {
      if (!fields["secondname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["secondname"] = "Second name must be only letters";

      }
    }
    if (typeof fields["company"] !== "undefined") {
      if (!fields["company"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["company"] = "Company Name must be only letters";

      }
    }
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty"

    }

    else if (typeof fields["email"] !== "undefined") {
      if (!fields["email"].match("@")) {
        formIsValid = false;
        errors["emails"] = "use @"

      }
    }


    if (!fields["Address"]) {
      formIsValid = false;
      errors["Address"] = "Address cannot be empty"

    }

    if (!fields["City"]) {
      formIsValid = false;
      errors["City"] = "City cannot be empty"

    }
    else if (typeof fields["City"] !== "City") {
      if (!fields["City"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["City"] = "City must be only letters";

      }
    } if (!fields["Country"]) {
      formIsValid = false;
      errors["Country"] = "Country cannot be empty"

    }
    else if (typeof fields["Country"] !== "Country") {
      if (!fields["Country"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["Country"] = "Country must be only letters";

      }
    } if (!fields["ZipCode"]) {
      formIsValid = false;
      errors["ZipCode"] = "ZipCode cannot be empty"

    }
    else if (typeof fields["ZipCode"] !== "ZipCode") {
      if (!fields["ZipCode"] == 6) {
        formIsValid = false;
        errors["ZipCode"] = "ZipCode must be 6 digit";

      }
    }
    if (!fields["number"]) {
      formIsValid = false;
      errors["number"] = "number cannot be empty"

    }
    else if (typeof fields["number"] !== "number") {
      if (!fields["number"] == 11) {
        formIsValid = false;
        errors["number"] = "number must be 11 digit";

      }
    }
    this.setState({ errors: errors });
    return formIsValid;


  }
  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("sumited")
    } else {
      alert(`wrong `)
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields })
  }
  render() {


    return (
      <div className="checkout">
        <Container fluid>
          <form onSubmit={this.contactSubmit.bind(this)} >

            <Row>

              <Col lg="8" md="8" sm="12" className="formcheckout">
                <h3>Billing details</h3>

                <input type="text" name="fname" placeholder="First Name*" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                <span>{this.state.errors["name"]}</span>
                <div className="checkform">
                  <input type="text" name="sname" placeholder="Last Name" onChange={this.handleChange.bind(this, "secondname")} value={this.state.fields["secondname"]} />
                </div>
                <span>{this.state.errors["secondname"]}</span>
                <div className="checkform">
                  <input type="text" name="company" placeholder="Company Name (optional)" onChange={this.handleChange.bind(this, "company")} value={this.state.fields["company"]} />
                </div>
                <span>{this.state.errors["company"]}</span>
                <div className="checkform">
                  <input type="text" name="address" placeholder="Street Address*" onChange={this.handleChange.bind(this, "Address")} value={this.state.fields["Address"]} />
                </div>
                <span>{this.state.errors["Address"]}</span>
                <div className="checkform">
                  <input type="text" name="City" placeholder="City*" onChange={this.handleChange.bind(this, "City")} value={this.state.fields["City"]} />
                </div>
                <span>{this.state.errors["City"]}</span>
                <div className="checkform">
                  <input type="text" name="Country" placeholder="Country*" onChange={this.handleChange.bind(this, "Country")} value={this.state.fields["Country"]} />
                </div>
                <span>{this.state.errors["Country"]}</span>
                <div className="checkform">
                  <input type="text" name="ZipCode" placeholder="Zip/Postal Code*" onChange={this.handleChange.bind(this, "ZipCode")} value={this.state.fields["ZipCode"]} />
                </div>
                <span>{this.state.errors["ZipCode"]}</span>
                <div className="checkform">
                  <input type="number" name="number" placeholder="Phone*" onChange={this.handleChange.bind(this, "number")} value={this.state.fields["number"]} />
                </div>
                <span>{this.state.errors["number"]}</span>
                <div className="checkform">
                  <input type="email" placeholder="Email*" name="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                </div>
                <span>{this.state.errors["email"]}</span>
                <div className="d-flex align-items-center justify-content-between">
                  <input type="submit" value="Place Order" />
                  <Link to="/Cart" > <button>Back To Cart</button></Link>
                </div>

              </Col>
              <Col lg="4" md="4" sm="12" className="col2ccheck">
                {this.props.cart.map((item) => (

                  <div className="cartcheckout" >
                    <img src={item.product.img} alt="" />

                    <p>{item.product.name}</p>
                    <p>${item.product.CurrentPrice}</p>
                    <div className="dcartt">{item.quantity}</div>


                  </div>
                ))}



                <hr />

                <div className="formcheckn ">
                  <h3>Your order</h3>
                  <div className="d-flex px-3 my-5 justify-content-between"><p>Number Of Products	</p><p>{this.props.totalQuantity} </p></div>

                  <div className="d-flex  px-3 justify-content-between"><p>Total Price	</p><p>{this.props.total} $ </p></div>

                </div>
              </Col>

            </Row>
          </form>




        </Container>

        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.cart.reduce((total, item) => total + item.quantity * item.product.CurrentPrice, 0),
    totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
  };
};


export default connect(mapStateToProps, null)(Checkout);

