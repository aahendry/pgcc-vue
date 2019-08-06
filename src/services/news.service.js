import Axios from 'axios';

const RESOURCE_NAME = '/news';

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },
  create(data) {
    return Axios.post(RESOURCE_NAME, data);
  },
  update(id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data);
  },
  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`);
  }
};
