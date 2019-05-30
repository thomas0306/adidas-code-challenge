/*
 *
 * WishlistPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_CRITERIA, FETCH_SUGGESTIONS, SUGGESTIONS_RECEIVED } from './constants';

export const initialState = {
  criteria: '',
  suggestions: [],
  wishlist: [],
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const wishlistPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case CHANGE_CRITERIA:
        return {
          ...state,
          criteria: action.payload,
        };
      case FETCH_SUGGESTIONS:
        return {
          ...state,
          loading: true,
        };
      case SUGGESTIONS_RECEIVED:
          return {
            ...state,
            suggestions: action.payload,
            loading: false,
          }
      case DEFAULT_ACTION:
        break;
    }
  });

export default wishlistPageReducer;
