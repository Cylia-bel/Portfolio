"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-80 md:h-96">
            <Image
              src="/profile.jpg"
              alt="Votre photo de profil"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              À propos de moi
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Je suis une développeuse web passionnée avec une expertise en
              développement front-end et back-end. J'aime créer des applications
              web modernes et intuitives qui offrent une excellente expérience
              utilisateur.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Avec plus de 2 ans d'expérience dans le développement web, j'ai
              travaillé sur divers projets allant des sites vitrines aux
              applications web complexes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Compétences
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>React / Next.js</li>
                  <li>Node.js / Express</li>
                  <li>Javascript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Outils</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Git / GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
