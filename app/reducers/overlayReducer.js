// @flow
import C from '../config/constants';
import * as overlayModel from '../models/overlayModel';

const defaultState = {
  visible: false
};

function overlay(state: overlayModel.schema = defaultState, action: overlayModel.action) {
  switch (action.type) {
    case C.OVERLAY.SHOW:
      return {
        ...state,
        visible: true
      };
    case C.OVERLAY.HIDE:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
}

export default overlay;
