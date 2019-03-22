import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'https://burger-builder-6574c.firebaseio.com/'
});

export default myAxios;
