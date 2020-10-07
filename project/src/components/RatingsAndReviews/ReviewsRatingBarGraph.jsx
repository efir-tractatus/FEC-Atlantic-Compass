import React, { useState } from 'react';

const ReviewsRatingBarGraph = (props) => {
  const [data, setData] = useState(props.ratings);
  const [barHeight, setBarHeight] = useState(props.modeRatings);

  let returner = [];

  for (let i = 5; i >= 1; i--) {
    returner.push(
      <div>
        <BarGraphComponents
          value={i}
          data={data[i]}
          barHeight={barHeight}
        />
      </div>
    );
  }

  return <div>{returner}</div>;
};

const BarGraphComponents = (props) => {
  let completed = Math.floor((props.data / props.barHeight) * 100);

  const containerStyles = {
    height: 10,
    width: '13.5%',
    backgroundColor: '#e0e0de',
    borderRadius: 25,
    margin: 25,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#696969',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <div>
      {props.value}
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

export default ReviewsRatingBarGraph;
