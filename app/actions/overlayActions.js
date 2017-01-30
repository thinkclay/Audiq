// @flow
import C from '../config/constants';

export const show = () => ({
  type: C.OVERLAY.SHOW
});

export const hide = () => ({
  type: C.OVERLAY.HIDE
});
