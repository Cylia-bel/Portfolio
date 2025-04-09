import { ProjectDetails } from '@/components/ProjectDetails'
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute'

// Données temporaires pour les projets
const projects = [
  {
    id: '1',
    title: 'Application de Gestion de Tâches',
    description: 'Une application web moderne pour gérer vos tâches quotidiennes',
    longDescription: 'Cette application permet aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes. Elle inclut des fonctionnalités comme la catégorisation des tâches, les rappels, et la collaboration en équipe.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/project1.jpg',
    githubUrl: 'https://github.com/votre-username/task-manager',
    liveUrl: 'https://task-manager-demo.com',
  },
  {
    id: '2',
    title: 'Portfolio Personnel',
    description: 'Un portfolio moderne pour présenter mes projets et compétences',
    longDescription: 'Ce portfolio a été créé pour présenter mes projets et compétences de manière professionnelle. Il utilise les dernières technologies web pour offrir une expérience utilisateur optimale.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/project2.jpg',
    githubUrl: 'https://github.com/votre-username/portfolio',
    liveUrl: 'https://votre-portfolio.com',
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return <div>Projet non trouvé</div>
  }

  return (
    <ProtectedRoute>
      <ProjectDetails project={project} />
    </ProtectedRoute>
  )
} 