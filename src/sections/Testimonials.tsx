'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Link from 'next/link'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export function Testimonials() {
  const testimonials = useSelector((state: RootState) => state.testimonials.testimonials)
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que disent les personnes avec qui j'ai travaillé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(testimonial.createdAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-100 text-4xl" />
                <p className="text-gray-600 text-lg leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {isAuthenticated ? (
            <Link
              href="/testimonials"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Voir tous les témoignages
            </Link>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Connectez-vous pour voir et ajouter des témoignages
            </Link>
          )}
        </div>
      </div>
    </section>
  )
} 