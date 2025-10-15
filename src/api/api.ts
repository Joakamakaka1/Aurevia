import axios from 'axios';
import { environment } from 'src/environments/environment';

export const api = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
