import { GET_USER_LIST } from '../../constant/type';

const initialState = {
  userList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LIST:
      return { ...state, userList: payload };

    default:
      return state;
  }
};
