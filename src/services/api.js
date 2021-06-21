import axios from 'axios';

const api = axios.create({
   baseURL: 'https://api-todo-list-findup.herokuapp.com/api/v1/',
   timeout: 120000
});

export default api;