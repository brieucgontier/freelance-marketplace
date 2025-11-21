import { apiClient } from './api';
import type { User } from '../types';

interface RegisterData {
  email: string;
  password: string;
  name: string;
  role: 'freelance' | 'client';
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  status: string;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export const authService = {
  // Inscription
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  },

  // Connexion
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/login', data);
    return response.data;
  },

  // Récupérer l'utilisateur connecté
  getMe: async (): Promise<{ status: string; data: User }> => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  // Déconnexion (côté client uniquement)
  logout: () => {
    localStorage.removeItem('auth_token');
  },
};