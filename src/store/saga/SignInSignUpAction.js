import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { message } from 'antd';
import { SIGN_IN_API } from '../constant/Type';

function* signIn(action) {
  message.info('log in success');
}

export function* watchSignIn() {
  yield takeLatest(SIGN_IN_API, signIn);
}
