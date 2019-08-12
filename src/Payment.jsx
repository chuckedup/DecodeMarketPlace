import React, { Component } from "react";
import "./App.css";

class Payment extends Component {
  buy = () => {
    this.props.buy();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.buy}>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Credit Card Number" />
          <input type="text" placeholder="CVV" />
          <input type="text" placeholder="Expiry Date" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Payment;
