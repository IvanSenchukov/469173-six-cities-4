import React from 'react';
import renderer from 'react-test-renderer';
import CitiesMap from './cities-map.jsx';


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
  coordinates: [12.34, 56.78]
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
  coordinates: [12.34, 56.78]
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
  coordinates: [12.34, 56.78]
}];


it(`should renders correctly`, function () {
  const tree = renderer
    .create(<CitiesMap offers={DEFAULT_OFFERS} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});