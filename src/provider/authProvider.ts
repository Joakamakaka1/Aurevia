import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { api } from 'src/lib/api';

@Injectable({
  providedIn: 'root',
})
export class AuthProvider {
  private authState = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.authState.asObservable(); // Expose as Observable

  private readonly TOKEN_KEY = 'access_token';

  constructor(private router: Router) {
    this.checkToken();
    this.setupInterceptor();
  }

  // Check if token exists on app start
  private checkToken() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      this.authState.next(true);
    } else {
      this.authState.next(false);
    }
  }

  // Setup Axios interceptor to attach token
  private setupInterceptor() {
    api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(this.TOKEN_KEY);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Optional: Handle 401 response to auto-logout
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.logout();
        }
        return Promise.reject(error);
      }
    );
  }

  async login(credentials: any) {
    try {
      // Adjusted path based on user request: /api/v1/auth/login
      const response = await api.post('/auth/login', credentials);

      // Assuming response.data contains { access_token: "..." }
      if (response.data && response.data.access_token) {
        localStorage.setItem(this.TOKEN_KEY, response.data.access_token);
        this.authState.next(true);
        return response.data;
      }
      return false;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  async register(data: any) {
    try {
      const response = await api.post('/auth/register', data);
      // Depending on backend, register might auto-login or require explicit login.
      // For now, just return response.
      return response.data;
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    }
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.authState.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.authState.value;
  }
}
