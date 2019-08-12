import React, { Component } from "react";

class SellerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", rating: "", id: "" };
  }

  submitHandler = event => {
    event.preventDefault();
    let randId = Math.floor(Math.random() * 1000000).toString();
    let object = this.state;
    object["id"] = randId;
    this.props.seller(object);
    this.props.history.push("/");
  };

  updateName = event => {
    this.setState({ name: event.target.value });
  };

  updateRating = event => {
    this.setState({ rating: event.target.value });
  };

  render() {
    return (
      <div className="centerForm">
        <form
          className="sellerForm cardForm container"
          onSubmit={this.submitHandler}
        >
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateName}
            placeholder="Name"
          />
          <input
            type="text"
            value={this.state.rating}
            onChange={this.updateRating}
            placeholder="Rating"
          />
          <div>
            <input className="mySubmitButton" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default SellerForm;
