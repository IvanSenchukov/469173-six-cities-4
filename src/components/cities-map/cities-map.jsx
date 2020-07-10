import React from 'react';
import * as leaflet from 'leaflet';
import PropTypes from 'prop-types';

const COORDINATES_AMSTERDAM = [52.38333, 4.9];

class CitiesMap extends React.PureComponent {

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {

    if (!this.mapRef.current) {
      return;
    }

    const city = COORDINATES_AMSTERDAM;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    if (this.props.offers) {
      this.props.offers.map((offer) => {
        leaflet
          .marker(offer.coordinates, {icon})
          .addTo(map);
      });
    }

  }

  render() {
    return (
      <section className="cities__map map">
        <div id={`map`} ref={this.mapRef} style={{height: `100%`}}></div>
      </section>
    );
  }
}

CitiesMap.propTypes = {
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
  )
};

export default CitiesMap;
