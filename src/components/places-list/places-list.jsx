import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";

class PlacesList extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeCard: {}
    };
  }

  render() {

    const {offers, selectedCity, onPlaceCardNameClick} = this.props;

    const handlePlaceCardMouseOver = (offer) => {
      this.setState({activeCard: offer ? offer : {}});
    };

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers && offers
          .filter((offer) => {
            return offer.city === selectedCity;
          })
          .map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onNameClick={onPlaceCardNameClick}
              onMouseOver={handlePlaceCardMouseOver}
            />)
          )}
      </div>
    );
  }
}

PlacesList.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
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
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ),
  onPlaceCardNameClick: PropTypes.func.isRequired
};

export default PlacesList;
