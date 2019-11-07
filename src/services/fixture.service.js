import Axios from 'axios';
import { authHeader } from '../helpers/auth-header';

const RESOURCE_NAME = '/fixtures';

export default {
  getAll(season) {
    return Axios.get(`${RESOURCE_NAME}/?seasonId=${season || ''}`);
  },
  get(id) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.get(`${RESOURCE_NAME}/${id}`, requestOptions);
  },
  create(data) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.post(RESOURCE_NAME, data, requestOptions);
  },
  copy(id) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.post(`${RESOURCE_NAME}/${id}`, null, requestOptions);
  },
  update(id, data) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.put(`${RESOURCE_NAME}/${id}`, data, requestOptions);
  },
  delete(id) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.delete(`${RESOURCE_NAME}/${id}`, requestOptions);
  }
};
