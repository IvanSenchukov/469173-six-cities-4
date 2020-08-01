export function filterSelectedCityOffers(selectedCity) {
  return (offer) => {
    return offer.city === selectedCity;
  };
};
