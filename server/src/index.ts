import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './config/database';
import authRoutes from './routes/authRoutes';

// Charger les variables d'environnement
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/auth', authRoutes);

// Route de test
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: '🚀 Backend is running!',
    timestamp: new Date().toISOString(),
  });
});

// Route de test de la base de données
app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        freelanceProfile: true,
        clientProfile: true,
      },
    });
    res.json({
      status: 'success',
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error('❌ Database error:', error); // <-- Ajoutez cette ligne
    res.status(500).json({
      status: 'error',
      message: 'Database error',
      details: error instanceof Error ? error.message : 'Unknown error', // <-- Ajoutez cette ligne
    });
  }
});

// Route 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
});