// import Axios from 'axios';

// const RESOURCE_NAME = '/winning-rinks';

export default {
  getAll(competition) {
    // return Axios.get(`${RESOURCE_NAME}/?competition=${competition}`);
    if (competition === 'gourdie') {
      return [
        { year: '2017/2018', skip: 'R Goodall', third: 'D Gourdie', second: 'P Fraser', lead: 'C McNeil' }
      ];
    }

    return null;
  }
};
