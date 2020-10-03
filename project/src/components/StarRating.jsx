import React from 'react';

const StarRating = (props) => {
  console.log('StarRating', props);
  var avgRating = 0
  var count = 0
  
  for (var star in props.primaryProductMetadata.ratings) {
    var starCount = props.primaryProductMetadata.ratings[star]
    avgRating += starCount * star
    count += starCount
  }

  avgRating = Math.round((avgRating/count)*100)/100

  console.log(avgRating)
  
  return (
    <div>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default StarRating;


// props.primaryProductMetadata.ratings