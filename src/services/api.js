import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://rocketseat-node.herokuapp.com/api/products'
});

export default api;