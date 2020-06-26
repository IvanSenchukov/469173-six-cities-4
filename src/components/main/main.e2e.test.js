import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main";

const DEFAULT_NAME = `PlaceCard.name`;
const DEFAULT_TYPE = `PlaceCard.type`;
const DEFAULT_REFERENCE = `PlaceCard.reference`;
const DEFAULT_IMAGE_SRC = `PlaceCard.imageSrc`;
const DEFAULT_PRICE = 90;
const DEFAULT_PERIOD = `PlaceCard.period`;
const DEFAULT_RATING = 4;

const DEFAULT_OFFERS = [{
  id: `0`,
  name: DEFAULT_NAME,
  type: DEFAULT_TYPE,
  reference: DEFAULT_REFERENCE,
  imageSrc: DEFAULT_IMAGE_SRC,
  price: DEFAULT_PRICE,
  period: DEFAULT_PERIOD,
  rating: DEFAULT_RATING,
},
{
  id: `1`,
  name: `${DEFAULT_NAME}_1`,
  type: `${DEFAULT_TYPE}_1`,
  reference: `${DEFAULT_REFERENCE}_1`,
  imageSrc: `${DEFAULT_IMAGE_SRC}_1`,
  price: DEFAULT_PRICE + 1,
  period: `${DEFAULT_PERIOD}_1`,
  rating: 1,
  addedToBookmarks: true,
},
{
  id: `2`,
  name: `${DEFAULT_NAME}_2`,
  type: `${DEFAULT_TYPE}_2`,
  reference: `${DEFAULT_REFERENCE}_2`,
  imageSrc: `${DEFAULT_IMAGE_SRC}_2`,
  price: DEFAULT_PRICE + 2,
  period: `${DEFAULT_PERIOD}_2`,
  rating: 3,
  premium: true,
}];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main Component`, () => {
  it(`should handle click on all place card names`, function () {
    const handlePlaceCardNameClick = jest.fn();

    const mainComponent = mount(
        <Main
          foundPlacesCount={2}
          availableOffers={DEFAULT_OFFERS}
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
