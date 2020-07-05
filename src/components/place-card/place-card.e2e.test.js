import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  offer: {
    name: `PlaceCard.name`,
    type: `PlaceCard.type`,
    reference: `PlaceCard.reference`,
    imageSrc: `PlaceCard.imageSrc`,
    price: 90,
    period: `PlaceCard.period`,
    rating: 4,
    coordinates: [12.34, 56.78]
  }
};

describe(`PlaceCard component`, () => {
  it(`should pass proper offer to onMouseOver callback`, () => {

    const handleNameClick = jest.fn();
    const handleMouseOver = jest.fn();

    const placeCard = shallow(
        <PlaceCard offer={mock.offer} onNameClick={handleNameClick} onMouseOver={handleMouseOver}/>
    );

    placeCard.simulate(`mouseOver`, {preventDefault() {}});

    expect(handleMouseOver).toHaveBeenCalledTimes(1);
    expect(handleMouseOver.mock.calls[0][0]).toMatchObject(mock.offer);
  });
});
