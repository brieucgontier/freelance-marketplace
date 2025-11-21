// Configuration de l'API
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
};

// Endpoints de l'API
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },
  // Users
  USERS: {
    BASE: '/users',
    PROFILE: (id: string) => `/users/${id}`,
    UPDATE: (id: string) => `/users/${id}`,
  },
  // Projects
  PROJECTS: {
    BASE: '/projects',
    DETAIL: (id: string) => `/projects/${id}`,
    CREATE: '/projects',
    UPDATE: (id: string) => `/projects/${id}`,
    DELETE: (id: string) => `/projects/${id}`,
  },
  // Proposals
  PROPOSALS: {
    BASE: '/proposals',
    BY_PROJECT: (projectId: string) => `/projects/${projectId}/proposals`,
    ACCEPT: (id: string) => `/proposals/${id}/accept`,
    REJECT: (id: string) => `/proposals/${id}/reject`,
  },
  // Milestones
  MILESTONES: {
    BASE: '/milestones',
    BY_PROJECT: (projectId: string) => `/projects/${projectId}/milestones`,
    UPDATE: (id: string) => `/milestones/${id}`,
  },
  // Reviews
  REVIEWS: {
    BASE: '/reviews',
    BY_USER: (userId: string) => `/users/${userId}/reviews`,
    CREATE: '/reviews',
  },
  // Matching (IA)
  MATCHING: {
    FIND_FREELANCES: (projectId: string) => `/matching/project/${projectId}`,
    FIND_PROJECTS: (freelanceId: string) => `/matching/freelance/${freelanceId}`,
  },
};