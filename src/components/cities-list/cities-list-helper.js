export function filterByExistanceInOffers(offers) {
  return (city, i) => {
    if (i > 5) {
      return false;
    }
    return offers.find((offer) => {
      return offer.city === city.name;
    });
  };
}
