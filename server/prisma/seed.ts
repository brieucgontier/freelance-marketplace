import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Hash password pour les utilisateurs de test
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Créer un freelance
  const freelance = await prisma.user.create({
    data: {
      email: 'freelance@test.com',
      password: hashedPassword,
      name: 'Marie Dupont',
      role: 'freelance',
      avatar: 'https://i.pravatar.cc/150?img=1',
      freelanceProfile: {
        create: {
          title: 'Développeuse Full Stack React/Node.js',
          bio: 'Passionnée par le développement web moderne avec 5 ans d\'expérience.',
          skills: JSON.stringify(['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS']),
          hourlyRate: 65,
          availability: 'available',
          rating: 4.8,
          reviewCount: 24,
          completedProjects: 18,
        },
      },
    },
  });

  // Créer un client
  const client = await prisma.user.create({
    data: {
      email: 'client@test.com',
      password: hashedPassword,
      name: 'Thomas Martin',
      role: 'client',
      avatar: 'https://i.pravatar.cc/150?img=12',
      clientProfile: {
        create: {
          company: 'StartupXYZ',
        },
      },
    },
  });

  // Créer un projet
  const project = await prisma.project.create({
    data: {
      title: 'Développement d\'une plateforme e-commerce',
      description: 'Nous recherchons un développeur pour créer une boutique en ligne moderne avec React et Node.js.',
      budget: 5000,
      skills: JSON.stringify(['React', 'Node.js', 'PostgreSQL', 'Stripe']),
      status: 'open',
      clientId: client.id,
      deadline: new Date('2025-12-31'),
    },
  });

  // Créer une proposition
  await prisma.proposal.create({
    data: {
      projectId: project.id,
      freelanceId: freelance.id,
      coverLetter: 'Bonjour, je suis très intéressée par votre projet. J\'ai 5 ans d\'expérience...',
      proposedRate: 65,
      estimatedDuration: '2 mois',
      status: 'pending',
    },
  });

  console.log('✅ Database seeded successfully!');
  console.log('📧 Freelance: freelance@test.com / password123');
  console.log('📧 Client: client@test.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });