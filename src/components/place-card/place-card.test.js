import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const DEFAULT_NAME = `PlaceCard.name`;
const DEFAULT_TYPE = `PlaceCard.type`;
const DEFAULT_REFERENCE = `PlaceCard.reference`;
const DEFAULT_IMAGE_SRC = `PlaceCard.imageSrc`;
const DEFAULT_PRICE = 90;
const DEFAULT_PERIOD = `PlaceCard.period`;
const DEFAULT_RATING = 4;


it(`renders correctly with only required fields`, () => {
  const tree = renderer
    .create(<PlaceCard
      name={DEFAULT_NAME}
      type={DEFAULT_TYPE}
      reference={DEFAULT_REFERENCE}
      imageSrc={DEFAULT_IMAGE_SRC}
      price={DEFAULT_PRICE}
      period={DEFAULT_PERIOD}
      rating={DEFAULT_RATING}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly with full rating`, () => {
  const tree = renderer
    .create(<PlaceCard
      name={DEFAULT_NAME}
      type={DEFAULT_TYPE}
      reference={DEFAULT_REFERENCE}
      imageSrc={DEFAULT_IMAGE_SRC}
      price={DEFAULT_PRICE}
      period={DEFAULT_PERIOD}
      rating={5}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly when added to bookmarks`, () => {
  const tree = renderer
    .create(<PlaceCard
      name={DEFAULT_NAME}
      type={DEFAULT_TYPE}
      reference={DEFAULT_REFERENCE}
      imageSrc={DEFAULT_IMAGE_SRC}
      price={DEFAULT_PRICE}
      period={DEFAULT_PERIOD}
      rating={DEFAULT_RATING}
      addedToBookmarks={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly when offer is premium`, () => {
  const tree = renderer
    .create(<PlaceCard
      name={DEFAULT_NAME}
      type={DEFAULT_TYPE}
      reference={DEFAULT_REFERENCE}
      imageSrc={DEFAULT_IMAGE_SRC}
      price={DEFAULT_PRICE}
      period={DEFAULT_PERIOD}
      rating={DEFAULT_RATING}
      premium={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
