import axios from 'axios'

const api = axios.create({
  baseURL: 'https://j6c7jm3du2.execute-api.us-east-1.amazonaws.com/dev',
  headers: {
    ...axios.defaults.headers,
    'Content-type': 'application/json',
    'Access-Control-Allow-Headers' : 'Content-Type',
    'Access-Control-Allow-Origin' : '*'
  }
});

export default api;