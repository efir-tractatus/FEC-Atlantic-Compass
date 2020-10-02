import React from "react";

const IndividualReviews = (props) => {
  if (!!props.response.length) {
    let response = (
      <div className="placeHolder">
        <b className="placeHolder">Response:</b>
        <p className="placeHolder">{props.response}</p>
      </div>
    )
  }

  return (
    <div className="placeHolder">
    <StarIndicator starData={props.rating}/>

    </div>
      // some indication of confirmed user, {props.reviewer_name} {props.date} in line 7


    // this is where the text is going to go
    <div className="placeHolder">
      <p className="placeHolder">{props.title}</p>
      <p className="placeHolder">{props.body}</p>
    </div>

    //logic to add responses
    {response}


    //button for was this review helpful
    <div>
    <p className="placeHolder">Was this review helpful?</p>
    <div className="placeHolder" type="button" onClick={this}></div>
    </div>
  )
}