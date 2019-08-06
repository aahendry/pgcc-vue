import Axios from 'axios';

const RESOURCE_NAME = '/news';

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },
  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`);
  }
};
