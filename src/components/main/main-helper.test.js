import {
  filterCitiesByExistanceInOffers,
  filterSelectedCityOffers,
  getSelectedCityOrFirstAvailable,
} from "./main-helper";
import {mocks} from "./main-test-mocks";

describe(`Places Filtering`, () => {
  it(`should filter all offers for selected city`, function () {

    const placesListForBrussels = mocks.offers.filter(filterSelectedCityOffers({name: `Brussels`}));
    expect(placesListForBrussels.length).toBe(0);

    const placesListForParis = mocks.offers.filter(filterSelectedCityOffers({name: `Paris`}));
    expect(placesListForParis.length).toBe(1);

    const placesListForAmsterdam = mocks.offers.filter(filterSelectedCityOffers({name: `Amsterdam`}));
    expect(placesListForAmsterdam.length).toBe(4);
  });
});

describe(`Selcted City Initialization`, () => {
  it(`should use given selected city if present`, function () {
    const selectedCity = getSelectedCityOrFirstAvailable(mocks.cities[3], mocks.cities);
    expect(selectedCity.name).toBe(`Amsterdam`);
  });
  it(`should get first city name if selected city if absent`, function () {
    const selectedCity = getSelectedCityOrFirstAvailable(undefined, mocks.cities);
    expect(selectedCity.name).toBe(`Paris`);
  });
});

describe(`CitiesList Filtering`, () => {
  it(`should filter all cities without available offers`, function () {

    const resultCitiesList = mocks.cities.filter(filterCitiesByExistanceInOffers(mocks.offers));

    expect(resultCitiesList).not.toBeNull();
    expect(resultCitiesList.length).toBe(2);
    expect(resultCitiesList[0].name).toBe(`Paris`);
    expect(resultCitiesList[1].name).toBe(`Amsterdam`);
  });
  it(`should filter all cities with index beyond 6`, function () {

    const resultCitiesList = mocks.cities.filter(filterCitiesByExistanceInOffers(mocks.offersForAllCities));

    expect(resultCitiesList).not.toBeNull();
    expect(resultCitiesList.length).toBe(6);
  });
});
