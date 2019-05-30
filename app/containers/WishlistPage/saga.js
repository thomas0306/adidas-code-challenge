import { put, takeLatest, all, select } from 'redux-saga/effects';
import { makeSelectCriteria } from './selectors';
import { suggestionsReceived } from './actions';
import { FETCH_SUGGESTIONS } from './constants';

// Individual exports for testing
function* fetchSuggestions() {
  const criteria = yield select(makeSelectCriteria());
  const endpoint = `/api/suggestions/${criteria}`;
  try {
    const suggestions = yield fetch(endpoint).then(res => res.json());
    yield put(suggestionsReceived(suggestions.products));
  } catch (err) {
    console.log(err)
  }
}

function* actionWatcher() {
  yield takeLatest(FETCH_SUGGESTIONS, fetchSuggestions)
}

export default function* wishlistPageSaga() {
  yield all([
    actionWatcher(),
  ]);
}
