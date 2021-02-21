import { all } from 'redux-saga/effects';
import {
  watchAddMember,
  watchCreateProject,
  watchDeleteProject,
  watchGetAllProject,
  watchGetProjectCategory,
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
  ]);
}

export default rootSaga;
