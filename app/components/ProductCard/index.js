/**
 *
 * ProductCard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard({
  displayName,
  imageURL,
  price,
  productid,
  reviewCount,
  reviewRating,
  salePrice,
  subTitle,
  id,
}) {
  const filledStar = parseInt(reviewRating);
  return (
    <Card className="mb-2 px-2 py-1">
      <Card.Body className="row">
        <div className="col-md-4">
        <Card.Img src={imageURL} alt="Card image" />
        </div>
        <div className="col-md-8">
        <Card.Title>{displayName} <small>{subTitle}</small></Card.Title>
        <div><FormattedMessage {...messages.price} /> <FormattedMessage {...messages.currency} /> {price} {salePrice}</div>
        <div><FormattedMessage {...messages.productId} /> {productid}</div>
        <div><FormattedMessage {...messages.rating} /> {Array(5).fill().map((each, idx) =>
          idx < filledStar ?
            <FontAwesomeIcon icon={faStar} /> :
            <FontAwesomeIcon icon={faStarEmpty} />
        )} <FormattedMessage {...messages.by} /> {reviewCount} <FormattedMessage {...messages.customers} /></div>
        <div className="mt-1">
          {id ?
            <Button variant="danger"><FontAwesomeIcon icon={faMinus} /> <FormattedMessage {...messages.remove} /></Button> :
            <Button variant="success"><FontAwesomeIcon icon={faPlus} /> <FormattedMessage {...messages.addToWishlist} /></Button>
          }
        </div>
        </div>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  displayName: PropTypes.string,
  imageURL: PropTypes.string,
  price: PropTypes.number,
  productid: PropTypes.string,
  reviewCount: PropTypes.string,
  reviewRating: PropTypes.string,
  salePrice: PropTypes.number,
  subTitle: PropTypes.string,
  id: PropTypes.string,
};

export default memo(ProductCard);
