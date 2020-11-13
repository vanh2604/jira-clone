import { all } from 'redux-saga/effects';
import { watchSignIn } from './SignInSignUpAction';

function* rootSaga() {
  yield all([watchSignIn()]);
}

export default rootSaga;
