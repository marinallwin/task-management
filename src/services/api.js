import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch {
    throw new Error('Failed to fetch tasks');
  }
};

export default api;
