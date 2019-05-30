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

/**
 * Default selector used by WishlistPage
 */

const makeSelectWishlistPage = () =>
  createSelector(
    selectWishlistPageDomain,
    substate => substate,
  );

export default makeSelectWishlistPage;
export { selectWishlistPageDomain, makeSelectCriteria };
