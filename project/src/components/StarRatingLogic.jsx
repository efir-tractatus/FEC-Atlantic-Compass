import React from "react";

let StarRating = (props) => {
  const {number} = props;

  const renderedStars = Math.floor(number)
  const starDetermination = number - renderedStars
  const prop = Math.floor(starDetermination * 4)

  let returner = [];

  for (let i = 0; i < 5; i++) {
    if (i === renderedStars) {
      returner.push(<Stars prop={prop}/>)
    }
    if (i > renderedStars) {
      returner.push(<Stars prop={4}/>)
    }
    else {
      returner.push(<Stars prop={0}/>)
    }
  }

  return (
    <div>
      {returner}
    </div>
  )
}

let Stars = (props) => {
  return (
    <div>
    </div>
  )
}


export default StarRating