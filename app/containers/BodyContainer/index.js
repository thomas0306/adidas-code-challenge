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

import SuggestionList from './../../components/SuggestionList/Loadable';

import messages from './messages';

export function BodyContainer({
  wishlist,
  suggestions,
}) {
  return (
    <Row className="w-100">
      <Col lg={9}>
        <h1><FormattedMessage {...messages.wishlist}/> ({wishlist.length})</h1>
        {JSON.stringify(wishlist)}
      </Col>
      {suggestions.length > 0 &&
        <Col lg={3}>
          <h1><FormattedMessage {...messages.products}/> ({suggestions.length})</h1>
          <SuggestionList suggestions={suggestions} />
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
