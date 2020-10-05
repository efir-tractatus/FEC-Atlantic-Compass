import React from 'react';
import IndividualReviews from './IndividualReviews.jsx';
import ReviewsBreakDown from './ReviewsBreakDown.jsx';
import axios from 'axios';
import AddReviewsModal from './AddReviewsModal.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
    this.moreReviewsButton = this.moreReviewsButton.bind(this);
  }

  moreReviewsButton() {
    let newCount = this.state.count + 2;
    this.setState({
      count: newCount,
    });
  }

  buildIndividualReviews(counter) {
    var returner = [];
    for (let i = 0; i < counter; i++) {
      if (!this.props.reviews[i]) {
        break;
      }
      returner.push(
        <IndividualReviews
          reviewId={this.props.reviews[i]}
          key={this.props.reviews[i].review_id}
        />
      );
    }
    return returner;
  }

  addReviews() {}

  render() {
    return (
      <div className='placeHolder'>
        <div className='placeHolder'>
          {this.props.reviews.length} reviews, sorted by
          <select>
            <option selected value='relevance'>
              relevance
            </option>
            <option value='helpfulness'>helpfulness</option>
            <option value='newest'>newest</option>
          </select>
        </div>
        {this.buildIndividualReviews(this.state.count)}
        <div
          className='placeHolder'
          type='button'
          onClick={this.moreReviewsButton}
        >
          More Reviews
        </div>
        <div
          className='placeHolder'
          type='button'
          onClick={() => {
            return 'holding this place';
          }}
        >
          Add A Reviews +
        </div>
      </div>
    );
  }
}

ReviewsList.prototypes = {};

export default ReviewsList;
