import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FreelanceDashboard from './pages/FreelanceDashboard';
import ClientDashboard from './pages/ClientDashboard';
import { useAuthStore } from './store/authStore';

function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Routes protégées */}
        <Route 
          path="/dashboard-freelance" 
          element={
            isAuthenticated && user?.role === 'freelance' ? (
              <FreelanceDashboard />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
        <Route 
          path="/dashboard-client" 
          element={
            isAuthenticated && user?.role === 'client' ? (
              <ClientDashboard />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;