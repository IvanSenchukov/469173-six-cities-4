import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const settings = {
  foundPlacesCount: 286,
  offers
};

ReactDOM.render(
    <App foundPlacesCount={settings.foundPlacesCount} offers={settings.offers}/>,
    document.querySelector(`#root`)
);
