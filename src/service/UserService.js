import { API_PATH } from '../constant/api-path';
import { ApiCall } from './api';

class UserService extends ApiCall {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  login = (userLogin) => {
    return this.post(API_PATH.AUTH.LOGIN, userLogin);
  };

  getAllUsers = (keyword) => {
    return this.get(API_PATH.USER.GET_ALL_USERS, { keyword });
  };
}

export const userService = new UserService();
