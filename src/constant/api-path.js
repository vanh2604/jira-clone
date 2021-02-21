const API_ROOT = 'http://casestudy.cyberlearn.vn/api';

export const API_PATH = {
  AUTH: {
    LOGIN: `${API_ROOT}/Users/signin`,
  },
  PROJECT: {
    PROJECT_CATEGORY: `${API_ROOT}/ProjectCategory`,
    CREATE_PROJECT: `${API_ROOT}/Project/createProjectAuthorize`,
    GET_ALL_PROJECTS: `${API_ROOT}/Project/getAllProject`,
    UPDATE_PROJECT: `${API_ROOT}/Project/updateProject`,
    DELETE_PROJECT: `${API_ROOT}/Project/deleteProject`,
    ADD_MEMBER: `${API_ROOT}/Project/assignUserProject`,
    REMOVE_MEMBER: `${API_ROOT}/Project/removeUserFromProject`,
    GET_PROJECT_DETAIL: `${API_ROOT}/Project/getProjectDetail`,
  },
  USER: {
    GET_ALL_USERS: `${API_ROOT}/Users/getUser`,
  },
};
