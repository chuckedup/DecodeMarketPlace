import React, { Component } from "react";

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      price: 0,
      image: "",
      id: "",
      sellerId: "",
      details: ""
    };
  }

  submitHandler = event => {
    event.preventDefault();
    let randId = Math.floor(Math.random() * 1000000).toString();
    let object = this.state;
    object["id"] = randId;
    this.props.item(object);
    this.props.history.push("/");
  };

  updateDescription = event => {
    this.setState({ description: event.target.value });
  };

  updatePrice = event => {
    this.setState({ price: event.target.value });
  };

  updateImageURL = event => {
    this.setState({ image: event.target.value });
  };

  updateDetails = event => {
    this.setState({ details: event.target.value });
  };

  updateSeller = event => {
    this.setState({
      sellerId: event.target.options[event.target.selectedIndex].value
    });
  };
  render() {
    console.log(this.state.sellerId);
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>Description: </div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateDescription}
          />
          <div>Price: </div>
          <input
            type="text"
            value={this.state.rating}
            onChange={this.updatePrice}
          />
          <div>Image url: </div>
          <input
            type="text"
            value={this.state.rating}
            onChange={this.updateImageURL}
          />
          <div>Details (How many Available): </div>
          <input
            type="text"
            value={this.state.rating}
            onChange={this.updateDetails}
          />
          <div>Who Are you? </div>
          <select onChange={this.updateSeller}>
            {this.props.sellers.map(seller => (
              <option value={seller.id}>{seller.name}</option>
            ))}
          </select>
          <div />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ItemForm;
