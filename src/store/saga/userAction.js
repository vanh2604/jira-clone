import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_USER_LIST } from '../../constant/type';
import { userService } from '../../service/UserService';
import { setNotification } from '../../utils/common';

function* getAllUsers({ keyword }) {
  try {
    const { data } = yield call(() => userService.getAllUsers(keyword));
    if (data.content) {
      yield put({ type: GET_USER_LIST, payload: data.content });
    }
  } catch (error) {
    setNotification('error', 'cannot set this project');
    throw error;
  }
}

export function* watchGetAllUsers() {
  yield takeLatest('GET_ALL_USER_API', getAllUsers);
}
