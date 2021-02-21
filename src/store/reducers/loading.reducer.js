import { IS_LOADING, LOADING_DONE } from '../../constant/type';

const initialState = {
  isLoading: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case IS_LOADING:
      return { ...state, isLoading: true };
    case LOADING_DONE: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};
