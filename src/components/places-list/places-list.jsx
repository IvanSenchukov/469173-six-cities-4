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

    const {offers, onPlaceCardNameClick} = this.props;

    const handlePlaceCardMouseOver = (offer) => {
      this.setState({activeCard: offer ? offer : {}});
    };

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers && offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onNameClick={onPlaceCardNameClick}
            onMouseOver={handlePlaceCardMouseOver}
          />)
        )}
        {!offers && <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property availbale at the moment in
              Dusseldorf</p>
          </div>
        </section>}
      </div>
    );
  }
}

PlacesList.propTypes = {
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
