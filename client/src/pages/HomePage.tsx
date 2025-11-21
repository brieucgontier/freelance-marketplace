import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🚀 Freelance Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La plateforme qui connecte les meilleurs freelances avec les projets qui leur correspondent, grâce à l'IA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">Matching IA</h3>
            <p className="text-gray-600">
              Notre algorithme trouve automatiquement les meilleurs freelances pour chaque projet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">Paiement Sécurisé</h3>
            <p className="text-gray-600">
              Système d'escrow automatique qui protège freelances et clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Suivi de Projet</h3>
            <p className="text-gray-600">
              Gestion des jalons, livrables et paiements en temps réel.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/register')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Commencer Maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;