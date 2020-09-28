import React from "react";

var QandASearchbar = (props) => {
  return (
    <div className="QandA-searchbar-container">
      <input className="QandA-searchbar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
    </div>
  );
};

QandASearchbar.propTypes = {};

export default QandASearchbar;