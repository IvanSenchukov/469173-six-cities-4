import {filterByExistanceInOffers} from "./cities-list-helper";
import {mocks} from "./cities-list-test-mocks";

describe(`CitiesList filtering`, () => {
  it(`should filter all cities without available offers`, function () {

    const resultCitiesList = mocks.cities.filter(filterByExistanceInOffers(mocks.offers));

    expect(resultCitiesList).not.toBeNull();
    expect(resultCitiesList.length).toBe(2);
    expect(resultCitiesList[0].name).toBe(`Paris`);
    expect(resultCitiesList[1].name).toBe(`Amsterdam`);
  });
  it(`should filter all cities with index beyond 6`, function () {

    const resultCitiesList = mocks.cities.filter(filterByExistanceInOffers(mocks.offersForAllCities));

    expect(resultCitiesList).not.toBeNull();
    expect(resultCitiesList.length).toBe(6);
  });
});
