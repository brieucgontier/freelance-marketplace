// Types pour les utilisateurs
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'freelance' | 'client';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  freelanceProfile?: FreelanceProfile;
  clientProfile?: ClientProfile;
}

// Types pour les freelances
export interface FreelanceProfile {
  id: string;
  userId: string;
  title: string;
  bio: string;
  skills: string;
  hourlyRate: number;
  availability: 'available' | 'busy' | 'unavailable';
  rating: number;
  reviewCount: number;
  completedProjects: number;
  createdAt: string;
  updatedAt: string;
}

// Types pour les clients
export interface ClientProfile {
  id: string;
  userId: string;
  company?: string;
  createdAt: string;
  updatedAt: string;
}

// Types pour les projets
export interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  skills: string[];
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  clientId: string;
  freelanceId?: string;
  createdAt: string;
  deadline?: string;
}

// Types pour les propositions
export interface Proposal {
  id: string;
  projectId: string;
  freelanceId: string;
  coverLetter: string;
  proposedRate: number;
  estimatedDuration: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

// Types pour les milestones (jalons)
export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description: string;
  amount: number;
  status: 'pending' | 'in_progress' | 'completed' | 'paid';
  dueDate: string;
}

// Types pour les reviews
export interface Review {
  id: string;
  projectId: string;
  reviewerId: string;
  reviewedUserId: string;
  rating: number;
  comment: string;
  createdAt: string;
}