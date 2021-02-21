import { call, takeLatest, put } from 'redux-saga/effects';
import {
  IS_LOADING,
  LOADING_DONE,
  SIGN_IN,
  SIGN_IN_API,
} from '../../constant/type';
import { userService } from '../../service/UserService';
import { TOKEN, USER_LOGIN } from '../../constant/systemSeting';

function* signIn({ userLogin }) {
  yield put({
    type: IS_LOADING,
  });
  try {
    const { data } = yield call(() => userService.login(userLogin));
    yield put({ type: LOADING_DONE });
    if (data.content?.accessToken) {
      yield put({
        type: SIGN_IN,
        payload: data.content,
      });
      localStorage.setItem(TOKEN, data.content.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
    }
  } catch (error) {
    yield put({ type: LOADING_DONE });
  }
}

export default function* watchSignIn() {
  yield takeLatest(SIGN_IN_API, signIn);
}
