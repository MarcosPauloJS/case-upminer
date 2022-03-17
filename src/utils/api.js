import axios from 'axios'

const api = axios.create({
  baseURL: 'https://j6c7jm3du2.execute-api.us-east-1.amazonaws.com/dev',
});

export default api;