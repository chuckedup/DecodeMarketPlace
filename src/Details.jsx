import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Details extends Component {
  render() {
    console.log(this.props.reviews);
    let reviews = this.props.reviews;
    return (
      <div className="card center">
        <img height="150px" src={this.props.info.image} />
        <h1>{this.props.info.description}</h1>
        <div>There are {this.props.info.details} left</div>
        <div>
          <h2>Reviews</h2>
          {reviews.map(review => {
            return (
              <div>
                <Link to={"/reviewer/" + review.reviewerId}>
                  {review.reviewerId}
                </Link>
                : {review.review}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Details;
