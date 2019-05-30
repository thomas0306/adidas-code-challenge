/*
 *
 * WishlistPage actions
 *
 */

import { DEFAULT_ACTION, CHANGE_CRITERIA, FETCH_SUGGESTIONS, SUGGESTIONS_RECEIVED } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeCriteria(criteria) {
  return {
    type: CHANGE_CRITERIA,
    payload: criteria,
  };
}

export function fetchSuggestions() {
  return {
    type: FETCH_SUGGESTIONS,
  }
}
export function suggestionsReceived(suggestions) {
  return {
    type: SUGGESTIONS_RECEIVED,
    payload: suggestions,
  };
}