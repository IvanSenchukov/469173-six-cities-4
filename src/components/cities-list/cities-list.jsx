import React from "react";
import PropTypes from "prop-types";
import {filterByExistanceInOffers} from "./cities-list-helper";

const CitiesList = (props) => {

  const {offers, cities, onCityClick, selectedCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities
            .filter(filterByExistanceInOffers(offers))
            .map((city) => {
              return (
                <li key={JSON.stringify(city)} className="locations__item">
                  <a
                    className={`locations__item-link tabs__item ${city.name === selectedCity ? `tabs__item--active` : ``}`}
                    onClick={() => onCityClick(city.name)}>
                    <span>{city.name}</span>
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
    </div>);
};

CitiesList.propTypes = {
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
  ).isRequired,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
