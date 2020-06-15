import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {

  const name = props.name;
  const type = props.type;
  const reference = props.reference;
  const imageSrc = props.imageSrc;
  const price = props.price;
  const period = props.period;
  const addedToBookmarks = props.addedToBookmarks || false;
  const premium = props.premium || false;
  const rating = 100 * props.rating / 5;

  const ratingStyle = {
    width: `${rating}%`
  };

  let bookmarkButton = null;

  if (addedToBookmarks) {
    bookmarkButton =
      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>;
  } else {
    bookmarkButton =
      <button className="place-card__bookmark-button button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>;
  }


  return (
    <article className="cities__place-card place-card">

      {premium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={reference}>
          <img className="place-card__image" src={imageSrc} width="260" height="200" alt="Place image"></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{period}</span>
          </div>
          {bookmarkButton}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={reference}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  addedToBookmarks: PropTypes.bool,
  premium: PropTypes.bool,
  rating: PropTypes.number.isRequired
};

export default PlaceCard;
