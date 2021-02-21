import { applyMiddleware, createStore, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createMiddlewareSaga from 'redux-saga';
import loadingReducer from './reducers/loading.reducer';
import historyReducer from './reducers/history.reducer';
import userLoginReducer from './reducers/userLogin.reducer';
import projectReducer from './reducers/project.reducer';
import drawerReducer from './reducers/drawer.reducer';
import userReducer from './reducers/user.reducer';
// middleware saga
import rootSaga from './saga/rootSaga';

const rootReducer = combineReducers({
  loadingReducer,
  historyReducer,
  userLoginReducer,
  projectReducer,
  drawerReducer,
  userReducer,
});

const middlewareSaga = createMiddlewareSaga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, middlewareSaga))
);

const task = middlewareSaga.run(rootSaga);
task.error.call();

export default store;
