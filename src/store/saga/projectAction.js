import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ROUTE } from '../../constant/routing';
import {
  ADD_MEMBER_API,
  CLOSE_DRAWER,
  CREATE_PROJECT_API,
  DELETE_PROJECT_API,
  GET_ALL_PROJECTS,
  GET_PROJECT_CATEGORY,
  GET_PROJECT_DETAIL,
  GET_PROJECT_DETAIL_API,
  IS_LOADING,
  LOADING_DONE,
  PROJECT_CATEGORY_API,
  REMOVE_MEMBER_API,
  UPDATE_PROJECT_API,
} from '../../constant/type';
import { projectService } from '../../service/projectService';
import { setNotification } from '../../utils/common';

function* getProjectCategory() {
  const { data } = yield call(projectService.getProjectCategory);
  yield put({ type: GET_PROJECT_CATEGORY, payload: data.content });
}

export function* watchGetProjectCategory() {
  yield takeLatest(PROJECT_CATEGORY_API, getProjectCategory);
}

function* createProject({ newProject }) {
  const { history } = yield select((state) => state.historyReducer);
  try {
    const { data } = yield call(() => projectService.createProject(newProject));
    if (data) {
      setNotification('success', 'create project successfully!');
      history.push(ROUTE.PROJECT_MANAGEMENT);
    }
  } catch (error) {
    setNotification('error', 'create project failed!');
  }
}

export function* watchCreateProject() {
  yield takeLatest(CREATE_PROJECT_API, createProject);
}

function* getProjectList() {
  try {
    yield put({ type: IS_LOADING });
    const { data } = yield call(projectService.getProjectList);
    if (data) {
      yield put({ type: LOADING_DONE });
      yield put({ type: GET_ALL_PROJECTS, payload: data.content });
    }
  } catch (error) {
    yield put({ type: LOADING_DONE });
  }
}

export function* watchGetAllProject() {
  yield takeLatest('GET_ALL_PROJECT_API', getProjectList);
}

function* updateProject({ newProject, projectId }) {
  try {
    const data = yield call(() =>
      projectService.updateProject(newProject, projectId)
    );
    if (data) {
      yield put({ type: CLOSE_DRAWER });
      yield call(getProjectList);
    }
  } catch (error) {
    yield put({ type: CLOSE_DRAWER });
  }
}

export function* watchUpdateProject() {
  yield takeLatest(UPDATE_PROJECT_API, updateProject);
}

function* deleteProject({ projectId }) {
  try {
    const { data } = yield call(() => projectService.deleteProject(projectId));
    if (data) {
      setNotification('success', 'delete project success!');
      yield call(getProjectList);
    } else {
      setNotification('error', 'delete project error!');
    }
  } catch (error) {
    setNotification('error', 'delete project error!');
  }
}

export function* watchDeleteProject() {
  yield takeLatest(DELETE_PROJECT_API, deleteProject);
}

function* safe(effect) {
  try {
    return { response: yield effect };
  } catch (error) {
    return { error };
  }
}

function* addMember({ payload }) {
  const { projectId, userId } = payload;
  const { response } = yield safe(
    call(() => projectService.addMember(projectId, userId))
  );
  if (response) {
    yield call(getProjectList);
  } else {
    setNotification('error', 'cannot add member to this project');
  }
}

export function* watchAddMember() {
  yield takeLatest(ADD_MEMBER_API, addMember);
}

function* removeMember({ payload }) {
  const { projectId, userId } = payload;
  const { response } = yield safe(
    call(() => projectService.removeMember(projectId, userId))
  );
  if (response) {
    yield call(getProjectList);
  } else {
    setNotification('error', 'cannot remove member from this project');
  }
}

export function* watchRemoveMember() {
  yield takeLatest(REMOVE_MEMBER_API, removeMember);
}

function* getProjectDetail({ projectId }) {
  try {
    yield put({ type: IS_LOADING });
    const { data } = yield call(() =>
      projectService.getProjectDetail(projectId)
    );
    if (data) {
      yield put({ type: GET_PROJECT_DETAIL, payload: data.content });
      yield put({ type: LOADING_DONE });
    }
  } catch (error) {
    yield put({ type: LOADING_DONE });
    const { history } = yield select((state) => state.historyReducer);
    history.push(ROUTE.PROJECT_MANAGEMENT);
  }
}

export function* watchGetProjectDetail() {
  yield takeLatest(GET_PROJECT_DETAIL_API, getProjectDetail);
}
