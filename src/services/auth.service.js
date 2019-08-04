/* eslint-disable no-use-before-define */
import Axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const AuthService = {
  login,
  logout,
  handleResponse
};

// eslint-disable-next-line no-unused-vars
function login(username, password) {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' }
  };
  return Axios.post('/auth/login', JSON.stringify({ username, password }), requestOptions)
    .then((x) => {
      handleResponse(x);
      if (x.data.token) {
        localStorage.setItem('user', JSON.stringify(x.data));
      }
      return x;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(x) {
  if (!x.status === 200) {
    if (x.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      location.reload(true);
    }
    const error = x.response.statusText;
    return Promise.reject(error);
  }
  return x;
}
