import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  return (
    <Main onPlaceCardNameClick={props.onPlaceCardNameClick}/>
  );
};

App.propTypes = {
  onPlaceCardNameClick: PropTypes.func.isRequired
};

export default App;
