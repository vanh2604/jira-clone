import { all } from 'redux-saga/effects';
import {
  watchAddMember,
  watchCreateProject,
  watchDeleteProject,
  watchGetAllProject,
  watchGetProjectCategory,
  watchGetProjectDetail,
  watchRemoveMember,
  watchUpdateProject,
} from './projectAction';
import watchSignIn from './SignInSignUpAction';
import { watchGetAllUsers } from './userAction';

function* rootSaga() {
  yield all([
    watchSignIn(),
    watchGetProjectCategory(),
    watchCreateProject(),
    watchGetAllProject(),
    watchUpdateProject(),
    watchDeleteProject(),
    watchGetAllUsers(),
    watchAddMember(),
    watchRemoveMember(),
    watchGetProjectDetail(),
  ]);
}

export default rootSaga;
