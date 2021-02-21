import { ADD_HISTORY } from '../../constant/type';

const initialState = {
  history: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_HISTORY:
      return { ...state, history: payload };

    default:
      return state;
  }
};
