import { USER_LOGIN } from '../../constant/systemSeting';
import { SIGN_IN } from '../../constant/type';

const initialState = {
  user: localStorage.getItem(USER_LOGIN)
    ? JSON.stringify(localStorage.getItem(USER_LOGIN))
    : null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, user: payload };
    default:
      return state;
  }
};
