import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main Component`, () => {
  it(`should handle click on all place card names`, function () {
    const handlePlaceCardNameClick = jest.fn();

    const mainComponent = mount(
        <Main
          onPlaceCardNameClick={handlePlaceCardNameClick}
        />
    );

    const placeCardNames = mainComponent.find(`h2.place-card__name`);

    expect(placeCardNames.length).toBe(3);

    placeCardNames.forEach((placeCardName) => {
      placeCardName.simulate(`click`, {preventDefault() {}});
    });

    expect(handlePlaceCardNameClick).toHaveBeenCalledTimes(3);
  });

});
