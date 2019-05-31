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

import FlexDiv from './FlexDiv';
import AppOverlay from './AppOverlay';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWishlistPage, { makeSelectCriteria, makeSelectWishlist, makeSelectSuggestions, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { changeCriteria, fetchSuggestions, setWishlistName, fetchWishlist, getNewWishList } from './actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

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
  loading,
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
    <FlexDiv>
      <Helmet>
        <title>WishlistPage ({identifier})</title>
        <meta name="description" content="Description of WishlistPage" />
      </Helmet>
      {loading &&
        <AppOverlay className="text-white d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faSpinner} spin />
        </AppOverlay>
      }
      <AppBar criteria={criteria} onChangeCriteria={onChangeCriteria} onSuggestionsSearchClick={onSuggestionsSearchClick} />
      <BodyContainer wishlist={wishlist} suggestions={suggestions} />
    </FlexDiv>
  );
}

WishlistPage.propTypes = {
  criteria: PropTypes.string,
  wishlist: PropTypes.array,
  suggestions: PropTypes.array,
  loading: PropTypes.bool,
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
  loading: makeSelectLoading(),
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
