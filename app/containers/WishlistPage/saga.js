import { put, takeLatest, all, select } from 'redux-saga/effects';
import { makeSelectCriteria, makeSelectWishlistName } from './selectors';
import { suggestionsReceived, setWishlistName, wishlistReceived, getNewWishList } from './actions';
import { FETCH_SUGGESTIONS, FETCH_WISHLIST, POST_WISHLIST } from './constants';
import history from './../../utils/history';

// Individual exports for testing
function* fetchSuggestions() {
  const criteria = yield select(makeSelectCriteria());
  const endpoint = `/api/suggestions/${criteria}`;
  try {
    const suggestions = yield fetch(endpoint).then(res => res.json());
    yield put(suggestionsReceived(suggestions.products));
  } catch (err) {
    console.log(err);
  }
}

function* fetchWishlist() {
  const wishlistName = yield select(makeSelectWishlistName());
  const endpoint = `/api/wishlist/${wishlistName}`;
  try {
    const response = yield fetch(endpoint).then(res => res.json());
    if (response.success) {
      yield put(wishlistReceived(response.wishlist));
    } else {
      yield put(getNewWishList());
    }
  } catch (err) {
    console.log(err);
    postWishlist();
  }
}

function* postWishlist() {
  const endpoint = '/api/wishlist';
  try {
    const response = yield fetch(endpoint, {
      method: 'POST',
    }).then(res => res.json());
    yield put(setWishlistName(response.identifier));
    history.push(`/${response.identifier}`);
  } catch (err) {
    console.log(err);
  }
}

function* suggestionsActionWatcher() {
  yield takeLatest(FETCH_SUGGESTIONS, fetchSuggestions);
}

function* getWishlistActionWatcher() {
  yield takeLatest(FETCH_WISHLIST, fetchWishlist);
}

function* postWishlistActionWatcher() {
  yield takeLatest(POST_WISHLIST, postWishlist);
}

export default function* wishlistPageSaga() {
  yield all([
    suggestionsActionWatcher(),
    getWishlistActionWatcher(),
    postWishlistActionWatcher(),
  ]);
}
