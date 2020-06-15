import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";

const settings = {
  foundPlacesCount: 286,
  availableOffers: [
    {
      id: `0`,
      name: `Wood and stone place`,
      type: `Private room`,
      reference: `#`,
      imageSrc: `img/room.jpg`,
      price: 80,
      period: `night`,
      addedToBookmarks: true,
      premium: false,
      rating: 4,
    },
    {
      id: `1`,
      name: `Canal View Prinsengracht`,
      type: `Apartment`,
      reference: `#`,
      imageSrc: `img/apartment-02.jpg`,
      price: 132,
      period: `night`,
      addedToBookmarks: false,
      premium: false,
      rating: 4,
    },
    {
      id: `3`,
      name: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      reference: `#`,
      imageSrc: `img/apartment-03.jpg`,
      price: 180,
      period: `night`,
      addedToBookmarks: false,
      premium: true,
      rating: 5,
    },
  ]
};

ReactDOM.render(
    <App foundPlacesCount={settings.foundPlacesCount} availableOffers={settings.availableOffers}/>,
    document.querySelector(`#root`)
);
