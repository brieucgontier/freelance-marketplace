import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Navbar from '../components/Navbar';
import { Plus, Briefcase, Clock, CheckCircle, XCircle, Users } from 'lucide-react';

const ClientDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  // Stats du client
  const stats = [
    {
      icon: Briefcase,
      label: 'Projets actifs',
      value: 2,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Clock,
      label: 'En cours',
      value: 1,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: CheckCircle,
      label: 'Complétés',
      value: 5,
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Users,
      label: 'Freelances embauchés',
      value: 8,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  // Projets du client (mock data)
  const myProjects = [
    {
      id: '1',
      title: 'Développement d\'une plateforme e-commerce',
      status: 'open',
      budget: 5000,
      proposals: 12,
      createdAt: '3 jours',
    },
    {
      id: '2',
      title: 'Application mobile de gestion',
      status: 'in_progress',
      budget: 8000,
      freelance: 'Marie Dupont',
      progress: 65,
      createdAt: '2 semaines',
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      open: { label: 'Ouvert', class: 'bg-green-100 text-green-800' },
      in_progress: { label: 'En cours', class: 'bg-yellow-100 text-yellow-800' },
      completed: { label: 'Terminé', class: 'bg-blue-100 text-blue-800' },
      cancelled: { label: 'Annulé', class: 'bg-red-100 text-red-800' },
    };
    return badges[status as keyof typeof badges] || badges.open;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Tableau de bord Client
            </h1>
            <p className="text-gray-600">
              Gérez vos projets et trouvez les meilleurs freelances
            </p>
          </div>
          <button
            onClick={() => navigate('/create-project')}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            <Plus className="w-5 h-5" />
            <span>Nouveau Projet</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mes Projets */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Mes Projets</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {myProjects.map((project) => (
              <div key={project.id} className="p-6 hover:bg-gray-50 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(project.status).class}`}>
                        {getStatusBadge(project.status).label}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span>Budget: <strong className="text-gray-900">{project.budget}€</strong></span>
                      <span>•</span>
                      {project.status === 'open' && (
                        <span><strong className="text-indigo-600">{project.proposals}</strong> propositions</span>
                      )}
                      {project.status === 'in_progress' && project.freelance && (
                        <span>Freelance: <strong className="text-gray-900">{project.freelance}</strong></span>
                      )}
                      <span>•</span>
                      <span>Créé il y a {project.createdAt}</span>
                    </div>

                    {project.status === 'in_progress' && project.progress && (
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>Progression</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <button className="ml-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                    Voir détails
                  </button>
                </div>
              </div>
            ))}
          </div>

          {myProjects.length === 0 && (
            <div className="p-12 text-center">
              <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Vous n'avez pas encore de projet</p>
              <button
                onClick={() => navigate('/create-project')}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Créer mon premier projet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;