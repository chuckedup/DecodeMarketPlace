import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Seller extends Component {
  render() {
    console.log(this.props.items);
    let items = this.props.items;
    return (
      <div className="center card">
        {items.map(item => (
          <div>
            <Link to={"/details/" + item.id}>{item.description}</Link>
          </div>
        ))}
        <div>{this.props.seller.rating}</div>
      </div>
    );
  }
}

export default Seller;
