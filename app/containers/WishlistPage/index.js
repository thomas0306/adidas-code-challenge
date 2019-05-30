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
import makeSelectWishlistPage, { makeSelectCriteria, makeSelectWishlist, makeSelectSuggestions } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { changeCriteria, fetchSuggestions } from './actions';

import AppBar from '../../components/AppBar/Loadable';
import BodyContainer from '../BodyContainer/Loadable';

export function WishlistPage({
  criteria,
  onChangeCriteria,
  wishlist,
  suggestions,
  onSuggestionsSearchClick,
}) {
  useInjectReducer({ key: 'wishlistPage', reducer });
  useInjectSaga({ key: 'wishlistPage', saga });

  return (
    <div>
      <Helmet>
        <title>WishlistPage</title>
        <meta name="description" content="Description of WishlistPage" />
      </Helmet>
      <AppBar criteria={criteria} onChangeCriteria={onChangeCriteria} onSuggestionsSearchClick={onSuggestionsSearchClick}/>
      <BodyContainer wishlist={wishlist} suggestions={suggestions} />
    </div>
  );
}

WishlistPage.propTypes = {
  criteria: PropTypes.string,
  onChangeCriteria: PropTypes.func,
  wishlist: PropTypes.array,
  suggestions: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  wishlistPage: makeSelectWishlistPage(),
  criteria: makeSelectCriteria(),
  wishlist: makeSelectWishlist(),
  suggestions: makeSelectSuggestions(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeCriteria: evt => dispatch(changeCriteria(evt.target.value)),
    onSuggestionsSearchClick: evt => dispatch(fetchSuggestions()),
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
