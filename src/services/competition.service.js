import Axios from 'axios';
import { authHeader } from '../helpers/auth-header';

const RESOURCE_NAME = '/competitions';

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },
  getAllLeagues() {
    return Axios.get(`${RESOURCE_NAME}/leagues`);
  },
  get(id) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.get(`${RESOURCE_NAME}/${id}`, requestOptions);
  },
  getTable(id) {
    return Axios.get(`${RESOURCE_NAME}/table/${id}`);
  },
  create(data) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.post(RESOURCE_NAME, data, requestOptions);
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
