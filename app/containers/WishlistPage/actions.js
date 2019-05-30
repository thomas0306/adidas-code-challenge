/*
 *
 * WishlistPage actions
 *
 */

import { DEFAULT_ACTION, CHANGE_CRITERIA } from './constants';

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
