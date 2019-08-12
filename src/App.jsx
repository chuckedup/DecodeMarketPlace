import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Seller from "./Seller.jsx";
import Item from "./Item.jsx";
import Details from "./Details.jsx";
import Reviewer from "./Reviewer.jsx";
import SellerForm from "./SellerForm.jsx";
import ItemForm from "./ItemForm.jsx";
import Nav from "./Nav.jsx";
import Cart from "./Cart.jsx";
import Purchases from "./Purchases.jsx";
import Payment from "./Payment.jsx";
import { initialItems, initialSellers, reviews } from "./Data.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: initialItems,
      sellers: initialSellers,
      cart: {},
      purchases: []
    };
  }

  changeStateSellers = object => {
    this.setState({ sellers: [...this.state.sellers, object] });
  };

  changeStateItems = object => {
    this.setState({ items: [...this.state.items, object] });
  };

  changeCounterState = (id, name, image, cost) => {
    let object = this.state.cart;
    console.log(id);
    if (object[id] === undefined) {
      object[id] = {};
      object[id]["counter"] = 1;
    } else {
      object[id]["counter"] = object[id]["counter"] + 1;
    }
    object[id]["description"] = name;
    object[id]["imageLocation"] = image;
    object[id]["cost"] = cost;
    this.setState({ cart: object });
  };

  buyItems = () => {
    let cart = this.state.cart;
    this.setState({ cart: {}, purchases: [...this.state.purchases, cart] });
  };

  deleteItem = key => {
    let object = this.state.cart;
    delete object[key];
    this.setState({ cart: object });
  };

  renderCart = props => {
    return (
      <div>
        <Nav />
        <Cart
          items={this.state.cart}
          delete={this.deleteItem}
          history={props.history}
        />
      </div>
    );
  };

  renderPayment = props => {
    return (
      <div>
        <Nav />
        <Payment buy={this.buyItems} history={props.history} />
      </div>
    );
  };

  renderPurchaseHistory = () => {
    return (
      <div>
        <Nav />
        <Purchases items={this.state.purchases} />
      </div>
    );
  };

  renderAllItems = props => {
    return (
      <div>
        <Nav />
        {this.state.items.map(item => {
          return (
            <Item
              description={item.description}
              imageLocation={item.image}
              cost={item.price}
              sellerId={item.sellerId}
              id={item.id}
              counter={item.counter}
              details={item.details}
              method={this.changeCounterState}
            />
          );
        })}
      </div>
    );
  };

  renderSellerForm = props => {
    return (
      <div>
        <Nav />
        <SellerForm seller={this.changeStateSellers} history={props.history} />
      </div>
    );
  };

  renderItemForm = props => {
    return (
      <div>
        <Nav />
        <ItemForm
          item={this.changeStateItems}
          sellers={this.state.sellers}
          history={props.history}
        />
      </div>
    );
  };

  renderAllSellers = () => {
    return (
      <div>
        {this.state.sellers.map(seller => (
          <div>
            <div className="card center">
              <Link to={"/seller/" + seller.id}>{seller.name}</Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  renderSeller = routerData => {
    let sellerid = routerData.match.params.sid;
    let candidate = this.state.sellers.filter(seller => {
      return seller.id === sellerid;
    });
    let items = this.state.items.filter(item => {
      return item.sellerId === sellerid;
    });
    return <Seller seller={candidate[0]} items={items} />;
  };

  renderItemInfo = routerData => {
    let itemid = routerData.match.params.id;
    let relevantReviews = reviews.filter(review => {
      return review.itemId === itemid;
    });
    let candidate = this.state.items.filter(item => {
      return item.id === itemid;
    });
    return <Details info={candidate[0]} reviews={relevantReviews} />;
  };

  renderReviewer = routerData => {
    let reviewerid = routerData.match.params.rid;
    let candidate = reviews.filter(review => {
      return review.reviewerId === reviewerid;
    });
    return <Reviewer reviewer={candidate} />;
  };
  render() {
    console.log(this.state.purchases);
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={this.renderAllItems} />
          <Route exact={true} path="/sellers" render={this.renderAllSellers} />
          <Route
            exact={true}
            path="/details/:id"
            render={this.renderItemInfo}
          />
          <Route exact={true} path="/seller/:sid" render={this.renderSeller} />
          <Route
            exact={true}
            path="/reviewer/:rid"
            render={this.renderReviewer}
          />
        </div>
        <Route exact={true} path="/newSeller" render={this.renderSellerForm} />
        <Route exact={true} path="/newItem" render={this.renderItemForm} />
        <Route exact={true} path="/cart" render={this.renderCart} />
        <Route
          exact={true}
          path="/purchaseHistory"
          render={this.renderPurchaseHistory}
        />
        <Route exact={true} path="/payment" render={this.renderPayment} />
      </BrowserRouter>
    );
  }
}

export default App;
