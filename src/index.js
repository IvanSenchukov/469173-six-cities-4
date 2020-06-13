import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";

const settings = {
  foundPlacesCount: 286
};

ReactDOM.render(
    <App foundPlacesCount={settings.foundPlacesCount}/>,
    document.querySelector(`#root`)
);
