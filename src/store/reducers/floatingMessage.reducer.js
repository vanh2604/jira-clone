/* eslint-disable import/no-anonymous-default-export */
import { SHOW_MESSAGE } from '../constant/Type';

const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};
