/**
 *
 * WishlistPage
 *
 */

import React, { useEffect, memo } from 'react';
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

import { changeCriteria, fetchSuggestions, setWishlistName, fetchWishlist, getNewWishList } from './actions';

import AppBar from '../../components/AppBar/Loadable';
import BodyContainer from '../BodyContainer/Loadable';

export function WishlistPage({
  criteria,
  wishlist,
  suggestions,
  onChangeCriteria,
  onSuggestionsSearchClick,
  fetchWishlist,
  setWishlistName,
  registerNewWishList,
  match,
}) {
  useInjectReducer({ key: 'wishlistPage', reducer });
  useInjectSaga({ key: 'wishlistPage', saga });

  const identifier = match.params.identifier || '';
  useEffect(() => {
    if (identifier === '') {
      registerNewWishList();
    } else {
      setWishlistName(identifier);
      fetchWishlist();
    }
    
  }, []);

  return (
    <div>
      <Helmet>
        <title>WishlistPage ({identifier})</title>
        <meta name="description" content="Description of WishlistPage" />
      </Helmet>
      <AppBar criteria={criteria} onChangeCriteria={onChangeCriteria} onSuggestionsSearchClick={onSuggestionsSearchClick} />
      <BodyContainer wishlist={wishlist} suggestions={suggestions} />
    </div>
  );
}

WishlistPage.propTypes = {
  criteria: PropTypes.string,
  wishlist: PropTypes.array,
  suggestions: PropTypes.array,
  onChangeCriteria: PropTypes.func,
  onSuggestionsSearchClick: PropTypes.func,
  fetchWishlist: PropTypes.func,
  setWishlistName: PropTypes.func,
  registerNewWishList: PropTypes.func,
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
    fetchWishlist: () => dispatch(fetchWishlist()),
    setWishlistName: name => dispatch(setWishlistName(name)),
    registerNewWishList: () => dispatch(getNewWishList()),
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
