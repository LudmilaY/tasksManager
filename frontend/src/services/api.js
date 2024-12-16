import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchTasks = (userId) => API.get(`/tasks/${userId}`);
export const createTask = (task) => API.post('/tasks', task);
