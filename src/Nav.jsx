import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Nav extends Component {
  render() {
    return (
      <div class="topnav">
        <a>
          <Link to={"/purchaseHistory"}>Purchase History</Link>
        </a>
        <a>
          <Link to={"/cart"}>Cart</Link>
        </a>
        <a>
          <Link to="/sellers">View All Sellers</Link>
        </a>
        <a>
          <Link to="/newItem">New Item</Link>
        </a>
        <a>
          <Link to="/newSeller">New Seller</Link>
        </a>
        <a>
          <Link to="/">Home</Link>
        </a>
      </div>
    );
  }
}

export default Nav;
