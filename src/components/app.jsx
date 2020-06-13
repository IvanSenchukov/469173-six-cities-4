import React from 'react';
import Main from "./main.jsx";

const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <Main foundPlacesCount={props.foundPlacesCount}/>
  );
};

export default App;
