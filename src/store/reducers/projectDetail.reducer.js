import { GET_PROJECT_DETAIL } from '../../constant/type';

const initialState = {
  projectDetail: {
    members: [],
    lstTask: [],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECT_DETAIL:
      return { ...state, projectDetail: payload };

    default:
      return state;
  }
};
