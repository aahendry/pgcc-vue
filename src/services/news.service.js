import Axios from 'axios';

const RESOURCE_NAME = '/news';

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  }
};
