import {
  GET_ALL_PROJECTS,
  GET_PROJECT_CATEGORY,
  SET_PROJECT_EDIT,
} from '../../constant/type';

const initialState = {
  projectCategory: [],
  projectList: [],
  projectEditing: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECT_CATEGORY:
      return { ...state, projectCategory: payload };
    case GET_ALL_PROJECTS:
      return { ...state, projectList: payload };
    case SET_PROJECT_EDIT: {
      return { ...state, projectEditing: payload };
    }
    default:
      return state;
  }
};
