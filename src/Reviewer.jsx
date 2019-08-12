import React, { Component } from "react";
import "./App.css";

class Reviewer extends Component {
  render() {
    let reviewerReviews = this.props.reviewer;
    return (
      <div className="center card">
        {reviewerReviews.map(rev => (
          <div>
            {rev.reviewerId}: {rev.review}
          </div>
        ))}
      </div>
    );
  }
}

export default Reviewer;
