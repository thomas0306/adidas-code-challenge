/*
 *
 * WishlistPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  CHANGE_CRITERIA,
  FETCH_SUGGESTIONS,
  SUGGESTIONS_RECEIVED,
  WISHLIST_RECEIVED,
  SET_WISHLIST_NAME,
  ADD_ARTICLE,
  ARTICLE_ADDED,
  ARTICLE_DELETED,
  DELETE_ARTICLE,
  FETCH_WISHLIST,
  SET_LOADING,
} from './constants';
import { actionChannel } from 'redux-saga/effects';

export const initialState = {
  criteria: '',
  suggestions: [],
  wishlistName: '',
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
        };
      case FETCH_WISHLIST:
        return {
          ...state,
          loading: true,
        };
      case WISHLIST_RECEIVED:
        return {
          ...state,
          wishlist: action.payload,
          loading: false,
        };
      case SET_WISHLIST_NAME:
        return {
          ...state,
          wishlistName: action.payload,
        };
      case ADD_ARTICLE:
        return {
          ...state,
          loading: true,
        };
      case ARTICLE_ADDED:
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
          loading: false,
        };
      case DELETE_ARTICLE:
        return {
          ...state,
          loading: true,
        };
      case ARTICLE_DELETED:
        return {
          ...state,
          wishlist: state.wishlist.filter(article => article.id !== action.payload),
          loading: false,
        };
      case SET_LOADING:
        return {
          ...state,
          loading: false,
        };
      case DEFAULT_ACTION:
        break;
    }
  });

export default wishlistPageReducer;
