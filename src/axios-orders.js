import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-builder-6574c.firebaseio.com/'
});

export default axiosOrders;
