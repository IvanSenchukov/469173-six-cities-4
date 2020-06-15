import React from 'react';
import PropTypes from 'prop-types';
import Main from "../main/main.jsx";

const App = (props) => {
  return (
    <Main foundPlacesCount={props.foundPlacesCount} availableOffers={props.availableOffers}/>
  );
};

App.propTypes = {
  foundPlacesCount: PropTypes.number.isRequired,
  availableOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        reference: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        period: PropTypes.string.isRequired,
        addedToBookmarks: PropTypes.boolean,
        premium: PropTypes.boolean,
        rating: PropTypes.number.isRequired,
      })
  )
};

export default App;
