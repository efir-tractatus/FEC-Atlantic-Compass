import React from 'react';
import IndividualReviews from './IndividualReviews.jsx';
import ReviewsBreakDown from './ReviewsBreakDown.jsx';
import axios from 'axios';
import AddReviewsModal from './AddReviewsModal.jsx'

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
    this.moreReviewsButton = this.moreReviewsButton.bind(this);
  }

  moreReviewsButton() {
    if (this.state.count >= 4) {
      //runs a function that I need to write that pull requests more reviews
      let newCount = this.state.count + 2;
      axios
        .get(
          `http://18.224.37.110/reviews/?product_id=${this.props.primaryProduct.id}&count=${newCount}`
        )
        .then((res) => {
          this.setState({
            allReviews: res.data.results,
            count: res.data.results.length,
          });
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      let newCount = this.state.count + 2;
      this.setState({
        count: newCount,
      });
    }
  }

  buildIndividualReviews(counter) {
    var returner = [];
    if (this.state.count > 5) {
      for (let i = 0; i < counter; i++) {
        returner.push(
          <IndividualReviews
            reviewId={this.state.allReviews[i]}
            key={this.state.allReviews[i].review_id}
          />
        );
      }
    } else {
      for (let i = 0; i < counter; i++) {
        returner.push(
          <IndividualReviews
            reviewId={this.props.reviews[i]}
            key={this.props.reviews[i].review_id}
          />
        );
      }
    }
    return returner;
  }

  addReviews() {}

  render() {
    return (
      <div className='placeHolder'>
        <div className='placeHolder'>
          {this.state.count} reviews, sorted by relevance
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
