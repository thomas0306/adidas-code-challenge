import { put, takeLatest, all, select } from 'redux-saga/effects';
import { makeSelectCriteria, makeSelectWishlistName } from './selectors';
import { suggestionsReceived, setWishlistName, wishlistReceived, getNewWishList, articleAdded, articleDeleted, setLoading } from './actions';
import { FETCH_SUGGESTIONS, FETCH_WISHLIST, POST_WISHLIST, ADD_ARTICLE, DELETE_ARTICLE } from './constants';
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

function* suggestionsActionWatcher() {
  yield takeLatest(FETCH_SUGGESTIONS, fetchSuggestions);
}

function* fetchWishlist() {
  const wishlistName = yield select(makeSelectWishlistName());
  const endpoint = `/api/wishlist/${wishlistName}`;
  try {
    const response = yield fetch(endpoint).then(res => res.json());
    if (response.success) {
      yield put(wishlistReceived(response.wishlist));
    } else {
      console.log('get');
      yield put(getNewWishList());
    }
  } catch (err) {
    console.log(err);
    postWishlist();
  }
}

function* getWishlistActionWatcher() {
  yield takeLatest(FETCH_WISHLIST, fetchWishlist);
}

function* postWishlist() {
  const endpoint = '/api/wishlist';
  try {
    const response = yield fetch(endpoint, {
      method: 'POST',
    }).then(res => res.json());
    yield put(setWishlistName(response.identifier));
    yield put(setLoading(false));
    history.push(`/${response.identifier}`);
  } catch (err) {
    console.log(err);
  }
}

function* postWishlistActionWatcher() {
  yield takeLatest(POST_WISHLIST, postWishlist);
}

function* addArticle(action) {
  try {
    const wishlistName = yield select(makeSelectWishlistName());
    const endpoint = `/api/wishlist/${wishlistName}/item`;
    const response = yield fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    }).then(res => res.json());
    yield put(articleAdded(response.wishlistItem));
  } catch (err) {
    console.log(err);
  }
}

function* addArticleActionWatcher() {
  yield takeLatest(ADD_ARTICLE, addArticle);
}

function* deleteArticle(action) {
  try {
    const wishlistName = yield select(makeSelectWishlistName());
    const id = action.payload;
    const endpoint = `/api/wishlist/${wishlistName}/item/${id}`;
    const response = yield fetch(endpoint, {
      method: 'DELETE',
    }).then(res => res.json());
    yield put(articleDeleted(response.wishlistItem));
  } catch (err) {
    console.log(err);
  }
}

function* deleteArticleActionWatcher() {
  yield takeLatest(DELETE_ARTICLE, deleteArticle);
}

export default function* wishlistPageSaga() {
  yield all([
    suggestionsActionWatcher(),
    getWishlistActionWatcher(),
    postWishlistActionWatcher(),
    addArticleActionWatcher(),
    deleteArticleActionWatcher()
  ]);
}
