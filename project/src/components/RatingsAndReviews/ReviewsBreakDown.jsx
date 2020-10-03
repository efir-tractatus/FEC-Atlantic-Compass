import React from 'react';

class ReviewsBreakDown extends React.Component {
  constructor(props) {
    super(props);
    let recommends = this.props.primaryProductMetadata.recommended;
    const recommendedPercentage = Math.round(
      (recommends[1] / (recommends[0] + recommends[1])) * 100
    );

    let reviewCount = 0;
    let aggregateTotal = 0;
    for (let i = 1; i <= 5; i++) {
      reviewCount += this.props.primaryProductMetadata.ratings[i];
      aggregateTotal += i * this.props.primaryProductMetadata.ratings[i];
    }
    let overAllReviews = Math.round((aggregateTotal / reviewCount) * 10) / 10;
    this.state = {
      recommendedPercentage: recommendedPercentage,
      overAllReviews: overAllReviews,
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.overAllReviews}</div>
        <div>
          {this.state.recommendedPercentage}% of reviews recommend this product
        </div>
        <div>
          A subcomponent of a bargraph which displays individual review
          performance
        </div>
        <div>a pointer graph showing how the sizes compare</div>
      </div>
    );
  }
}

ReviewsBreakDown.prototypes = {};

export default ReviewsBreakDown;
