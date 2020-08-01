import {filterSelectedCityOffers} from "./main-helper";
import {mocks} from "./main-test-mocks";

describe(`Places Filtering`, () => {
  it(`should filter all offers for selected city`, function () {

    const placesListForBrussels = mocks.offers.filter(filterSelectedCityOffers(`Brussels`));
    expect(placesListForBrussels.length).toBe(0);

    const placesListForParis = mocks.offers.filter(filterSelectedCityOffers(`Paris`));
    expect(placesListForParis.length).toBe(1);

    const placesListForAmsterdam = mocks.offers.filter(filterSelectedCityOffers(`Amsterdam`));
    expect(placesListForAmsterdam.length).toBe(4);
  });
});
