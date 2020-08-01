export const filterSelectedCityOffers = (selectedCity) => {
  return (offer) => {
    return offer.city === selectedCity.name;
  };
};

export const getSelectedCityOrFirstAvailable = (selectedCity, cities) => {
  if (!selectedCity) {
    return cities[0];
  } else {
    return selectedCity;
  }
};

export function filterCitiesByExistanceInOffers(offers) {
  return (city, i) => {
    if (i > 5) {
      return false;
    }
    return offers.find((offer) => {
      return offer.city === city.name;
    });
  };
}

