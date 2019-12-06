import { all, call } from 'redux-saga/effects';

import { fetchCollectionStart } from './shop-reducer/saga-shop';
import { userSaga } from './user-reducer/user.saga';
import { shopSaga } from './cart-reducer/cart.saga';

function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga), call(shopSaga)]);
}

export default rootSaga;
