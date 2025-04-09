'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  {
    name: 'React',
    level: 90,
    image: '/images/skills/react.png'
  },
  {
    name: 'Next.js',
    level: 85,
    image: '/images/skills/nextjs.png'
  },
  {
    name: 'TypeScript',
    level: 80,
    image: '/images/skills/typescript.png'
  },
  {
    name: 'Node.js',
    level: 75,
    image: '/images/skills/nodejs.png'
  },
  {
    name: 'MongoDB',
    level: 70,
    image: '/images/skills/mongodb.png'
  },
  {
    name: 'Tailwind CSS',
    level: 85,
    image: '/images/skills/tailwind.png'
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mes Compétences</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                />
              </div>
              <p className="text-right text-sm text-gray-500 mt-1">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 