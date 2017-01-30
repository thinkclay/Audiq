// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import menu from './menuReducer';
import overlay from './overlayReducer';
import tome from './tomeReducer';

const rootReducer = combineReducers({
  menu,
  overlay,
  routing,
  tome
});

export default rootReducer;
