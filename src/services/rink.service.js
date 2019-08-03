import Axios from 'axios';

const RESOURCE_NAME = '/rinks';

export default {
  getAll(competition) {
    return Axios.get(`${RESOURCE_NAME}/?competition=${competition}`);
  },

  getAllWinning(competition) {
    return Axios.get(`${RESOURCE_NAME}/winning/?competition=${competition}`);
  }
};
