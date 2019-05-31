/**
 *
 * ProductCard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addArticle, deleteArticle } from '../../containers/WishlistPage/actions';

import MarkDownSpan from './MarkDownSpan';

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
  disableAdd,
  addArticleToWishlist,
  deleteArticleFromWishlist,
}) {
  // useInjectSaga({ key: 'wishlistPage', saga });

  const filledStar = parseInt(reviewRating);
  const onSale = salePrice < price;

  return (
    <Card className="mb-2 px-2 py-1">
      <Card.Body className="row">
        <div className="col-md-4">
          <Card.Img src={imageURL} alt="Card image" />
        </div>
        <div className="col-md-8">
          <Card.Title>{displayName} <small>{subTitle}</small></Card.Title>
          <div>
            <span className="mr-1"><FormattedMessage {...messages.price} /></span>
            <span className="mr-1"><FormattedMessage {...messages.currency} /></span>
            { onSale ? <MarkDownSpan className="mr-1">{price}</MarkDownSpan> : <span>{price}</span>}
            { !onSale || <span>{salePrice}</span> }
          </div>
          <div><FormattedMessage {...messages.productId} /> {productid}</div>
          <div><FormattedMessage {...messages.rating} /> {Array(5).fill().map((star, idx) =>
            idx < filledStar ?
              <FontAwesomeIcon key={idx} icon={faStar} /> :
              <FontAwesomeIcon key={idx} icon={faStarEmpty} />
          )} <FormattedMessage {...messages.by} /> {reviewCount} <FormattedMessage {...messages.customers} /></div>
          <div className="mt-1">
            {id ?
              <Button variant="danger" onClick={() => deleteArticleFromWishlist(id)}><FontAwesomeIcon icon={faMinus}/> <FormattedMessage {...messages.remove} /></Button> :
              <Button variant="success" disabled={disableAdd} onClick={() => addArticleToWishlist({
                displayName,
                imageURL,
                price,
                productid,
                reviewCount,
                reviewRating,
                salePrice,
                subTitle,
              })}>
                {disableAdd ?
                  <span><FontAwesomeIcon icon={faCheck} /> <FormattedMessage {...messages.added} /></span> :
                  <span><FontAwesomeIcon icon={faPlus} /> <FormattedMessage {...messages.addToWishlist} /></span>
                }
              </Button>
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
  disableAdd: PropTypes.bool,
  addArticleToWishlist: PropTypes.func,
  deleteArticleFromWishlist: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    addArticleToWishlist: article => dispatch(addArticle(article)),
    deleteArticleFromWishlist: id => dispatch(deleteArticle(id)),
  }
}

const withConnect = connect(
  undefined,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(ProductCard);
