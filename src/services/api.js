import axios from 'axios';

const api = axios.create({
   baseURL: 'http://192.168.0.100:3000/api/',
   timeout: 120000
});

export default api;