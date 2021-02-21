/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { getToken } from '../utils/common';

export class ApiCall {
  get = (url, query = {}) => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      params: query,
    };
    return axios.get(url, axiosConfig);
  };

  post = (url, body, query = {}) => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      params: query,
    };
    return axios.post(url, body, axiosConfig);
  };

  put = (url, body, query = {}) => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      params: query,
    };
    return axios.put(url, body, axiosConfig);
  };

  delete = (url, query = {}) => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      params: query,
    };
    return axios.delete(url, axiosConfig);
  };
}
