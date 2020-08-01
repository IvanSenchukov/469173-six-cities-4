import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {

  const {cities, onCityClick, selectedCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities
            .map((city) => {
              return (
                <li key={JSON.stringify(city)} className="locations__item">
                  <a
                    className={`locations__item-link tabs__item ${city.name === selectedCity.name ? `tabs__item--active` : ``}`}
                    onClick={() => onCityClick(city)}>
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
  selectedCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
