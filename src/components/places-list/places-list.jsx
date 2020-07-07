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

    const handlePlaceCardMouseOver = (offer) => {
      this.setState({activeCard: offer ? offer : {}});
    };

    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.offers && this.props.offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onNameClick={this.props.onPlaceCardNameClick}
            onMouseOver={handlePlaceCardMouseOver}
          />)
        )}
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
      })
  ),
  onPlaceCardNameClick: PropTypes.func.isRequired
};

export default PlacesList;
