import Axios from 'axios';
import { authHeader } from '../helpers/auth-header';

const RESOURCE_NAME = '/enquiry';

export default {
  getAll() {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.get(RESOURCE_NAME, requestOptions);
  },
  create(data) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.post(RESOURCE_NAME, data, requestOptions);
  },
  delete(id) {
    const requestOptions = {
      headers: authHeader()
    };

    return Axios.delete(`${RESOURCE_NAME}/${id}`, requestOptions);
  }
};
