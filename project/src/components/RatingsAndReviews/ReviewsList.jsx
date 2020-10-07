import React from 'react';
import IndividualReviews from './IndividualReviews.jsx';
import ReviewsBreakDown from './ReviewsBreakDown.jsx';
import axios from 'axios';
import AddReviewsModal from './AddReviewsModal.jsx';
import ModalTemplate from '../QuestionsAndAnswers/ModalTemplate/ModalTemplate';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      isOpen: false,
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

  render() {
    return (
      <div className='placeHolder'>
        <div className='placeHolder'>
          {this.props.reviews.length} reviews, sorted by
          <select defaultValue='relevance' onchange={(event) => {
            let newValue = event.target.value

          }}>
            <option value='relevance'>relevance</option>
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
            this.setState({ isOpen: true });
          }}
        >
          Add A Review +
        </div>
        <ModalTemplate
          open={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        >
          <AddReviewsModal
            productName={this.props.primaryProduct.name}
            productID={this.props.primaryProduct.id}
          />
        </ModalTemplate>
      </div>
    );
  }
}

ReviewsList.prototypes = {};

export default ReviewsList;
