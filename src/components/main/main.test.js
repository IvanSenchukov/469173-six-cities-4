import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import {mocks} from "./main-test-mocks";

describe(`Main Snapshots`, () => {
  it(`should render correctly with only required props`, function () {
    const tree = renderer
      .create(<Main
        selectedCity={{name: `Amsterdam`, coordinates: [1, 2]}}
        cities={mocks.cities}
        onPlaceCardNameClick={jest.fn()}
        selectCity={jest.fn()}
        offers={mocks.offers}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

