import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import Navbar from '../components/Navbar';
import { Briefcase, DollarSign, Star, TrendingUp, Search, Filter } from 'lucide-react';

const FreelanceDashboard = () => {
  const { user } = useAuthStore();
  const [projects, setProjects] = useState([]);

  // Stats du freelance
  const stats = [
    {
      icon: Briefcase,
      label: 'Projets complétés',
      value: user?.freelanceProfile?.completedProjects || 0,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: DollarSign,
      label: 'Taux horaire',
      value: `${user?.freelanceProfile?.hourlyRate || 0}€/h`,
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Star,
      label: 'Note moyenne',
      value: user?.freelanceProfile?.rating || 0,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: TrendingUp,
      label: 'Avis',
      value: user?.freelanceProfile?.reviewCount || 0,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  // Projets disponibles (mock data pour l'instant)
  const availableProjects = [
    {
      id: '1',
      title: 'Développement d\'une plateforme e-commerce',
      budget: 5000,
      skills: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Nous recherchons un développeur pour créer une boutique en ligne moderne.',
      postedAt: '2 heures',
    },
    {
      id: '2',
      title: 'Refonte d\'un site vitrine',
      budget: 2000,
      skills: ['React', 'TailwindCSS'],
      description: 'Moderniser notre site vitrine avec un design responsive.',
      postedAt: '5 heures',
    },
    {
      id: '3',
      title: 'API REST pour application mobile',
      budget: 3500,
      skills: ['Node.js', 'Express', 'MongoDB'],
      description: 'Développement d\'une API complète pour notre app mobile.',
      postedAt: '1 jour',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenue, {user?.name} 👋
          </h1>
          <p className="text-gray-600">
            {user?.freelanceProfile?.title || 'Complétez votre profil pour recevoir plus d\'opportunités'}
          </p>
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

        {/* Projets Disponibles */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Projets Disponibles</h2>
              <button className="flex items-center space-x-2 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                <Filter className="w-4 h-4" />
                <span>Filtrer</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Projects List */}
          <div className="divide-y divide-gray-200">
            {availableProjects.map((project) => (
              <div key={project.id} className="p-6 hover:bg-gray-50 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Budget: <strong className="text-green-600">{project.budget}€</strong></span>
                      <span>•</span>
                      <span>Publié il y a {project.postedAt}</span>
                    </div>
                  </div>
                  <button className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-medium">
                    Postuler
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceDashboard;