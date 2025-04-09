"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectDetailsProps {
  project: {
    id: string
    title: string
    description: string
    longDescription: string
    technologies: string[]
    image: string
    githubUrl?: string
    liveUrl?: string
  }
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-80 md:h-96">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {project.longDescription}
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Technologies utilisées
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <FaGithub />
                Code source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FaExternalLinkAlt />
                Voir le projet
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 