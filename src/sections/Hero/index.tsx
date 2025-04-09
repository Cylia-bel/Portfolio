"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bonjour, je suis <span className="text-blue-600">Votre Nom</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-8">
              Développeuse Web Full Stack
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Passionné par le développement web, je crée des applications
              modernes et performantes. Spécialisé en React, Next.js et Node.js,
              je m'efforce de créer des expériences utilisateur exceptionnelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-primary"
              >
                Me contacter
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-secondary"
              >
                Voir mes projets
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
