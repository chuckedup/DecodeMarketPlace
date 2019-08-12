import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Item extends Component {
  addCart = () => {
    console.log(this.props.id);
    this.props.method(
      this.props.id,
      this.props.description,
      this.props.imageLocation,
      this.props.cost
    );
  };
  render() {
    return (
      <div className="card center">
        <div className="left">
          {" "}
          <img height="100px" src={this.props.imageLocation} />
        </div>
        <div className="right">
          <div>{this.props.description}</div>
          <div>{this.props.cost}</div>
          <div>
            <Link to={"/seller/" + this.props.sellerId}>Link to Seller</Link>
          </div>
          <div>
            <Link to={"/details/" + this.props.id}>Details</Link>
          </div>
          <div>
            <button onClick={this.addCart} className="cartButton">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
