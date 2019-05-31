import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the wishlistPage state domain
 */

const selectWishlistPageDomain = state => state.wishlistPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectCriteria = () =>
  createSelector(
    selectWishlistPageDomain,
    substate => substate.criteria,
  )

const makeSelectWishlist = () =>
  createSelector(
    selectWishlistPageDomain,
    substate => substate.wishlist,
  )

const makeSelectSuggestions = () =>
  createSelector(
    selectWishlistPageDomain,
    substate => substate.suggestions,
  )

const makeSelectWishlistName = () =>
  createSelector(
    selectWishlistPageDomain,
    substate => substate.wishlistName,
  )

const makeSelectLoading = () =>
  createSelector(
    selectWishlistPageDomain,
    substate => substate.loading,
  )

/**
 * Default selector used by WishlistPage
 */

const makeSelectWishlistPage = () =>
  createSelector(
    selectWishlistPageDomain,
    substate => substate,
  );

export default makeSelectWishlistPage;
export {
  selectWishlistPageDomain,
  makeSelectCriteria,
  makeSelectWishlist,
  makeSelectSuggestions,
  makeSelectWishlistName,
  makeSelectLoading,
};
