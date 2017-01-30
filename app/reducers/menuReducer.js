// @flow
import C from '../config/constants';

const defaultState = {
  section: 'foo',
  topic: 'bar'
};

type stateType = {
  section: string,
  topic: string
};

type actionType = {
  type: string
};

export default function menu(state: stateType = defaultState, action: actionType) {
  switch (action.type) {
    case C.MENU.CHANGE_CHAPTER:
      return {
        ...state,
        section: 'something'
      };
    case C.MENU.CHANGE_SECTION:
      return {
        ...state,
        topic: 'interesting'
      };
    default:
      return state;
  }
}
