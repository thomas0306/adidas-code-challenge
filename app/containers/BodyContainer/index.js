/**
 *
 * BodyContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Wishlist from '../../components/Wishlist/Loadable';
import SuggestionList from './../../components/SuggestionList/Loadable';

import messages from './messages';

export function BodyContainer({
  wishlist,
  suggestions,
}) {
  return (
    <Row className="w-100 pl-2">
      <Col className="" lg={suggestions.length > 0 ? 6 : 12}>
        <h1><FormattedMessage {...messages.wishlist}/> ({wishlist.length})</h1>
        <Wishlist wishlist={wishlist} />
      </Col>
      {suggestions.length > 0 &&
        <Col lg={6}>
          <h1><FormattedMessage {...messages.products}/> ({suggestions.length})</h1>
          <SuggestionList suggestions={suggestions} existingArticles={wishlist.filter(product => product !== undefined).map(product => product.productid)}  />
        </Col>
      }
    </Row>
  );
}

BodyContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BodyContainer);
