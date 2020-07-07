import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";


ReactDOM.render(
    <App foundPlacesCount={286} offers={offers} onPlaceCardNameClick={() => {}}/>,
    document.querySelector(`#root`)
);
