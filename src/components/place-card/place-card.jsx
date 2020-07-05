import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {

  const name = props.offer.name;
  const type = props.offer.type;
  const reference = props.offer.reference;
  const imageSrc = props.offer.imageSrc;
  const price = props.offer.price;
  const period = props.offer.period;
  const addedToBookmarks = props.offer.addedToBookmarks || false;
  const premium = props.offer.premium || false;
  const rating = 100 * props.offer.rating / 5;

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
    <article
      className="cities__place-card place-card"
      onMouseOver={
        () => {
          props.onMouseOver(props.offer);
        }}
    >

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
        <h2 className="place-card__name" onClick={props.onNameClick}>
          <a href={reference}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape(
      {
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
      }
  ).isRequired,
  onNameClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired
};

export default PlaceCard;
