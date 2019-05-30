/*
 *
 * WishlistPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_CRITERIA } from './constants';

export const initialState = {
  criteria: 'Ultraboost',
  suggestions: [],
  wishlist: [],
};

/* eslint-disable default-case, no-param-reassign */
const wishlistPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case CHANGE_CRITERIA:
        return {
          ...initialState,
          criteria: action.payload,
        }
      case DEFAULT_ACTION:
        break;
    }
  });

export default wishlistPageReducer;
