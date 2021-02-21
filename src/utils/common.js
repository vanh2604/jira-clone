/* eslint-disable import/prefer-default-export */
import { notification } from 'antd';
import { TOKEN } from '../constant/systemSeting';

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const setNotification = (type, description, message = '') => {
  notification[type]({
    message,
    description,
  });
};
