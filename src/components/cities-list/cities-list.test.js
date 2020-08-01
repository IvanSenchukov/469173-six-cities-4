import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";
import {mocks} from "./cities-list-test-mocks";

describe(`CitiesList Snapshots`, () => {
  it(`should renders correctly with two available cities and selected city`, function () {
    const tree = renderer
      .create(<CitiesList selectedCity={`Paris`} offers={mocks.offers} cities={mocks.cities} onCityClick={jest.fn()}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should renders correctly with six available cities and selected city`, function () {
    const tree = renderer
      .create(<CitiesList selectedCity={`Paris`} offers={mocks.offersForAllCities} cities={mocks.cities} onCityClick={jest.fn()}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
