import Axios from 'axios';
import { AuthHeader } from '../helpers/auth-header';
import { AuthService } from './auth.service';

const RESOURCE_NAME = '/rinks';

export default {
  getAll(competition) {
    return Axios.get(`${RESOURCE_NAME}/?competition=${competition}`);
  },

  getAllWinning(competition) {
    const requestOptions = {
      method: 'GET',
      headers: AuthHeader()
    };

    return Axios.get(`${RESOURCE_NAME}/winning/?competition=${competition}`, requestOptions)
      .then(AuthService.handleResponse);
  }
};
