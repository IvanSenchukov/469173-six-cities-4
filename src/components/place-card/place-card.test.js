import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offer = {
  name: `PlaceCard.name`,
  type: `PlaceCard.type`,
  reference: `PlaceCard.reference`,
  imageSrc: `PlaceCard.imageSrc`,
  price: 90,
  period: `PlaceCard.period`,
  rating: 4
};

const offerRating5 = {
  name: `PlaceCard.name`,
  type: `PlaceCard.type`,
  reference: `PlaceCard.reference`,
  imageSrc: `PlaceCard.imageSrc`,
  price: 90,
  period: `PlaceCard.period`,
  rating: 5
};

const offerAddedToBookmarks = {
  name: `PlaceCard.name`,
  type: `PlaceCard.type`,
  reference: `PlaceCard.reference`,
  imageSrc: `PlaceCard.imageSrc`,
  price: 90,
  period: `PlaceCard.period`,
  rating: 4,
  addedToBookmarks: true
};

const offerPremium = {
  name: `PlaceCard.name`,
  type: `PlaceCard.type`,
  reference: `PlaceCard.reference`,
  imageSrc: `PlaceCard.imageSrc`,
  price: 90,
  period: `PlaceCard.period`,
  rating: 4,
  premium: true
};

it(`renders correctly with only required fields`, () => {
  const tree = renderer
    .create(<PlaceCard offer={offer} onNameClick={jest.fn()} onMouseOver={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly with full rating`, () => {
  const tree = renderer
    .create(<PlaceCard offer={offerRating5} onNameClick={jest.fn()} onMouseOver={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly when added to bookmarks`, () => {
  const tree = renderer
    .create(<PlaceCard offer={offerAddedToBookmarks} onNameClick={jest.fn()} onMouseOver={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly when offer is premium`, () => {
  const tree = renderer
    .create(<PlaceCard offer={offerPremium} onNameClick={jest.fn()} onMouseOver={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
