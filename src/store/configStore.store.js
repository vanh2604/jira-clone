import { applyMiddleware, createStore, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageReducer from './reducers/floatingMessage.reducer';
// middleware saga
import createMiddlewareSaga from 'redux-saga';
import rootSaga from './saga/rootSaga';

const rootReducer = combineReducers({ messageReducer });

const middlewareSaga = createMiddlewareSaga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, middlewareSaga))
);

middlewareSaga.run(rootSaga);

export default store;
