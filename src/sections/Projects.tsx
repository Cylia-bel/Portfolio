"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 2,
    title: "PRESCRIPTO",
    description:
      "Prescripto, une plateforme en ligne dédiée à la gestion des rendez-vous médicaux. Elle vise à simplifier la mise en relation entre patients et professionnels de santé tout en offrant une interface conviviale et centralisée",
    image: "/images/projects/projet2.jpg",
    //image: '/portfolio-next/public/images/projects/projet2.jpg',
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 1,
    title: "DARAC",
    description:
      "DARAC est une application de bureau sous (WPF) qui permettra aux utilisateurs de :Ajouter et catégoriser leurs transactions financières.Définir des limites budgétaires par catégories.Analyser les économies réalisées grâce à des rapports visuels détaillés.Recevoir des notifications en cas de dépassement de budget ou de paiements récurrents.cette application sera conçue pour être intuitive et facile a utiliser tout en garantissant un haut niveau de sécurité des données.",
    image: "/images/projects/projet1.jpg",
    technologies: ["WPF", "SQL"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Voir le projet
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
