import { api } from 'src/lib/api';

export const useAuth = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
