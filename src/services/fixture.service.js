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
    const newData = data;
    newData.when = new Date(new Date(newData.when).toUTCString()).toISOString();
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.post(RESOURCE_NAME, newData, requestOptions);
  },
  copy(id) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.post(`${RESOURCE_NAME}/${id}`, null, requestOptions);
  },
  update(id, data) {
    const newData = data;
    newData.when = new Date(new Date(newData.when).toUTCString()).toISOString();
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.put(`${RESOURCE_NAME}/${id}`, newData, requestOptions);
  },
  delete(id) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.delete(`${RESOURCE_NAME}/${id}`, requestOptions);
  }
};
