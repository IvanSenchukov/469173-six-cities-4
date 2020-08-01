import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";
import {mocks} from "./cities-list-test-mocks";

describe(`CitiesList Snapshots`, () => {
  it(`should renders correctly with all given cities selected city`, function () {
    const tree = renderer
      .create(<CitiesList selectedCity={mocks.cities[0]} offers={mocks.offers} cities={mocks.cities} onCityClick={jest.fn()}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
