import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlacesList from "./places-list.jsx";
import offers from "./places-list-test-mocks.js";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlacesList component - offers filtering`, () => {
  it(`should filter all offers with given selected city`, function () {

    const placesListForBrussels = mount(<PlacesList offers={offers} selectedCity={`Brussels`} onPlaceCardNameClick={jest.fn()}/>);

    const placeCardsForBrussels = placesListForBrussels.find(`.cities__place-card.place-card`);
    expect(placeCardsForBrussels.length).toBe(0);


    const placesListForParis = mount(<PlacesList offers={offers} selectedCity={`Paris`} onPlaceCardNameClick={jest.fn()}/>);

    const placeCardsForParis = placesListForParis.find(`.cities__place-card.place-card`);
    expect(placeCardsForParis.length).toBe(1);


    const placesListForAmsterdam = mount(<PlacesList offers={offers} selectedCity={`Amsterdam`} onPlaceCardNameClick={jest.fn()}/>);

    const placeCardsForAmsterdam = placesListForAmsterdam.find(`.cities__place-card.place-card`);
    expect(placeCardsForAmsterdam.length).toBe(4);
  });
});
