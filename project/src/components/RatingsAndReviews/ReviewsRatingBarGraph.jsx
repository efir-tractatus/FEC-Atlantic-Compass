import React from 'react';

const ReviewsRatingBarGraph = (props) => {
  const [data, setData] = useState(props.ratings);
  const [barHeight, setBarHeight] = useState(props.modeRatings);

  let arrayOfBars = () => {
    let returner = [];
    for (let i = 1; i <= 5; i++) {
      returner.push(
      <g style={transform: translate(0, 30)}>
        <BarGraphComponents value={i} data={data[i]} barHeight={barHeight}/>
      </g>)
    }
    return returner
  }
};

const individualBars = (props) => {
  let reviewScore = props.value;
  let amount = props.data;
  let barMax = props.barHeight;
}

ReviewsRatingBarGraph.prototype = {};
export default ReviewsRatingBarGraph;
