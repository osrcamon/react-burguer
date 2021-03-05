import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fatballs-burgers-default-rtdb.firebaseio.com/'
})

export default instance;