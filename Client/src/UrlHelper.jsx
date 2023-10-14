import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9987',
  // baseURL: '',
});

export default instance;
