import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";

const Settings = {
  FOUND_PLACES_COUNT: 286
};

ReactDOM.render(
    <App foundPlacesCount={Settings.FOUND_PLACES_COUNT}/>,
    document.querySelector(`#root`)
);
