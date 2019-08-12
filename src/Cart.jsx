import React, { Component } from "react";
import "./App.css";

class Cart extends Component {
  delete = event => {
    this.props.delete(event.target.value);
  };

  payment = () => {
    this.props.history.push("/payment");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {Object.keys(this.props.items).map((key, index) => {
          console.log(key, index);
          return (
            <div className="card center">
              {" "}
              <div className="leftCart">
                {" "}
                <img height="100px" src={this.props.items[key].imageLocation} />
              </div>
              <div className="rightCart">
                <div>{this.props.items[key].description}</div>
                <div>{this.props.items[key].cost}</div>
                <div>Amount: {this.props.items[key].counter}</div>
                <div>
                  <button
                    onClick={this.delete}
                    value={key}
                    className="deleteButton"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button onClick={this.payment}>Payment</button>
      </div>
    );
  }
}

export default Cart;
