import React from "react";

var QandASearchbar = (props) => {
  return (
    <div className="QandA-searchbar-container">
      <form>
        <input className="QandA-searchbar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
      </form>
    </div>
  );
};

QandASearchbar.propTypes = {};

export default QandASearchbar;