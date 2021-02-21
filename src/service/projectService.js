/* eslint-disable no-useless-constructor */
import { API_PATH } from '../constant/api-path';
import { ApiCall } from './api';

class ProjectService extends ApiCall {
  constructor() {
    super();
  }

  getProjectCategory = () => {
    return this.get(API_PATH.PROJECT.PROJECT_CATEGORY);
  };

  createProject = (newProject) => {
    return this.post(API_PATH.PROJECT.CREATE_PROJECT, newProject);
  };

  getProjectList = () => {
    return this.get(API_PATH.PROJECT.GET_ALL_PROJECTS);
  };

  getProjectDetail = (id) => {
    return this.get(API_PATH.PROJECT.GET_PROJECT_DETAIL, { id });
  };

  updateProject = (newProject, projectId) => {
    return this.put(API_PATH.PROJECT.UPDATE_PROJECT, newProject, {
      projectId,
    });
  };

  deleteProject = (projectId) => {
    return this.delete(API_PATH.PROJECT.DELETE_PROJECT, { projectId });
  };

  addMember = (projectId, userId) => {
    return this.post(API_PATH.PROJECT.ADD_MEMBER, { projectId, userId });
  };

  removeMember = (projectId, userId) => {
    return this.post(API_PATH.PROJECT.REMOVE_MEMBER, { projectId, userId });
  };
}

export const projectService = new ProjectService();
