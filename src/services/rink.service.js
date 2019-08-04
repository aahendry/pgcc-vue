import Axios from 'axios';
import { authHeader } from '../helpers/auth-header';
import { AuthService } from './auth.service';

const RESOURCE_NAME = '/rinks';

export default {
  getAll(competition) {
    return Axios.get(`${RESOURCE_NAME}/?competition=${competition}`);
  },

  getAllWinning(competition) {
    const requestOptions = {
      method: 'GET',
      headers: authHeader()
    };

    return Axios.get(`${RESOURCE_NAME}/winning/?competition=${competition}`, requestOptions)
      .then((x) => {
        AuthService.handleResponse(x);
        return x;
      });
  }
};
