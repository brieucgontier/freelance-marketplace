import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sign } from 'jsonwebtoken';
import prisma from '../config/database';

// Inscription
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name, role } = req.body;

    // Validation basique
    if (!email || !password || !name || !role) {
      return res.status(400).json({
        status: 'error',
        message: 'All fields are required',
      });
    }

    if (!['freelance', 'client'].includes(role)) {
      return res.status(400).json({
        status: 'error',
        message: 'Role must be "freelance" or "client"',
      });
    }

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        status: 'error',
        message: 'Email already registered',
      });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer l'utilisateur avec son profil
    const userData: any = {
      email,
      password: hashedPassword,
      name,
      role,
    };

    // Ajouter le profil selon le rôle
    if (role === 'freelance') {
      userData.freelanceProfile = {
        create: {
          title: '',
          bio: '',
          skills: JSON.stringify([]),
          hourlyRate: 0,
          availability: 'available',
        },
      };
    } else {
      userData.clientProfile = {
        create: {},
      };
    }

    const user = await prisma.user.create({
      data: userData,
      include: {
        freelanceProfile: true,
        clientProfile: true,
      },
    });

    const secret = process.env.JWT_SECRET as string || 'default_secret';
    const token = sign(
    { id: user.id, email: user.email, role: user.role },
    secret as string,
    { expiresIn: '7d' } as any
    );

    // Retourner l'utilisateur (sans le mot de passe) et le token
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: {
        user: userWithoutPassword,
        token,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Registration failed',
    });
  }
};

// Connexion
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Email and password are required',
      });
    }

    // Trouver l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        freelanceProfile: true,
        clientProfile: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid credentials',
      });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid credentials',
      });
    }

    // Générer le token
    const secret = process.env.JWT_SECRET as string || 'default_secret';
    const token = sign(
    { id: user.id, email: user.email, role: user.role },
    secret as string,
    { expiresIn: '7d' } as any
    );

    // Retourner l'utilisateur et le token
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      status: 'success',
      message: 'Login successful',
      data: {
        user: userWithoutPassword,
        token,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Login failed',
    });
  }
};

// Récupérer l'utilisateur connecté
export const getMe = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        freelanceProfile: true,
        clientProfile: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      status: 'success',
      data: userWithoutPassword,
    });
  } catch (error) {
    console.error('GetMe error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch user',
    });
  }
};