import React from 'react';
import * as leaflet from 'leaflet';
import PropTypes from 'prop-types';

class CitiesMap extends React.PureComponent {

  constructor(props) {
    super(props);
    this.zoom = 12;
    this.map = null;
    this.mapRef = React.createRef();
    this.markersLayer = leaflet.layerGroup();
  }

  componentDidMount() {

    if (!this.mapRef.current) {
      return;
    }

    this.createMap();
    this.setView();
    this.connectLayer();
    this.addMarkers();
  }

  componentDidUpdate(prevProps) {
    const {selectedCity, offers} = this.props;
    if (selectedCity.coordinates !== prevProps.selectedCity.coordinates) {
      this.cleanMap();
      this.setView();
      this.connectLayer();
      this.addMarkers();
    } else if (offers !== prevProps.offers) {
      this.cleanMarkers();
      this.addMarkers();
    }
  }

  createMap() {
    const {selectedCity} = this.props;
    const zoom = this.zoom;
    const selectedCityCoordinates = selectedCity.coordinates;
    this.map = leaflet.map(this.mapRef.current, {
      center: selectedCityCoordinates,
      zoom,
      zoomControl: false,
      marker: true,
    });
  }

  cleanMap() {
    this.cleanMarkers();
    this.map.eachLayer((layer) => {
      layer.remove();
    });
  }

  setView() {
    const cityCoordinates = this.props.selectedCity.coordinates;
    this.map.setView(cityCoordinates, this.zoom);
  }

  connectLayer() {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      })
      .addTo(this.map);
  }

  addMarkers() {

    const {offers} = this.props;
    this.markersLayer.addTo(this.map);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    offers.map((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this.markersLayer);
    });
  }

  cleanMarkers() {
    this.markersLayer.clearLayers();
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
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
  ),
  selectedCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default CitiesMap;
