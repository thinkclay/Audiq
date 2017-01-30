// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import * as tomeModel from '../models/tomeModel';

const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(thunk, router);

export default function configureStore(initialState?: tomeModel.schema) {
  return createStore(rootReducer, initialState, enhancer); // eslint-disable-line
}
