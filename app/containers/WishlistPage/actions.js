/*
 *
 * WishlistPage actions
 *
 */

import { DEFAULT_ACTION, CHANGE_CRITERIA, FETCH_SUGGESTIONS, SUGGESTIONS_RECEIVED, SET_WISHLIST_NAME, FETCH_WISHLIST, POST_WISHLIST, WISHLIST_RECEIVED, ADD_ARTICLE, ARTICLE_ADDED, DELETE_ARTICLE, ARTICLE_DELETED, SET_LOADING } from './constants';

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

export function setWishlistName(name) {
  return {
    type: SET_WISHLIST_NAME,
    payload: name,
  };
}

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    payload: false,
  };
}

export function fetchWishlist() {
  return {
    type: FETCH_WISHLIST,
  };
}

export function wishlistReceived(wishlist) {
  return {
    type: WISHLIST_RECEIVED,
    payload: wishlist,
  };
}

export function getNewWishList() {
  return {
    type: POST_WISHLIST,
  };
}

export function addArticle(article) {
  return {
    type: ADD_ARTICLE,
    payload: article,
  }
}

export function articleAdded(article) {
  return {
    type: ARTICLE_ADDED,
    payload: article,
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: id,
  }
}

export function articleDeleted(id) {
  return {
    type: ARTICLE_DELETED,
    payload: id,
  }
}
