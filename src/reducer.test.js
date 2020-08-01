import {actionCreators, reducer} from "./reducer";
import {mocks} from "./reducer-test-mocks";

const initialState = {
  offers: mocks.offers,
  cities: mocks.cities,
  selectedCity: undefined
};

it(`should correctly set selected city`, function () {
  const selectCityAction = actionCreators.selectCity(mocks.cities[0]);
  const newState = reducer(initialState, selectCityAction);

  expect(newState.selectedCity).toEqual(mocks.cities[0]);
});
