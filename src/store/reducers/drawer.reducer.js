import React from 'react';
import {
  CLOSE_DRAWER,
  OPEN_DRAWER,
  OPEN_DRAWER_COMPONENT,
  SET_CALLBACK,
} from '../../constant/type';

const initialState = {
  isVisible: false,
  title: '',
  Component: () => <p>default components</p>,
  callback: () => {
    // eslint-disable-next-line no-console
    console.log('submit');
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_DRAWER:
      return { ...state, isVisible: true, title: payload };
    case CLOSE_DRAWER:
      return { ...state, isVisible: false };
    case OPEN_DRAWER_COMPONENT:
      return { ...state, ...payload };
    case SET_CALLBACK:
      return { ...state, callback: payload };
    default:
      return state;
  }
};
