/**
 *
 * WishlistPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWishlistPage, { makeSelectCriteria } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { changeCriteria } from './actions';

import AppBar from '../../components/AppBar/Loadable';

export function WishlistPage({
  criteria,
  onChangeCriteria,
}) {
  useInjectReducer({ key: 'wishlistPage', reducer });
  useInjectSaga({ key: 'wishlistPage', saga });

  return (
    <div>
      <Helmet>
        <title>WishlistPage</title>
        <meta name="description" content="Description of WishlistPage" />
      </Helmet>
      <AppBar criteria={criteria} onChangeCriteria={onChangeCriteria} />
      <FormattedMessage {...messages.header} />
    </div>
  );
}

WishlistPage.propTypes = {
  criteria: PropTypes.string,
  onChangeCriteria: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  wishlistPage: makeSelectWishlistPage(),
  criteria: makeSelectCriteria(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeCriteria: evt => dispatch(changeCriteria(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WishlistPage);
