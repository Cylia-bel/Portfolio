'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { TestimonialList } from '@/components/Testimonial/TestimonialList'
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute'
import Link from 'next/link'

export default function TestimonialsPage() {
  const testimonials = useSelector((state: RootState) => state.testimonials.testimonials)
  const currentUser = useSelector((state: RootState) => state.auth.currentUser)

  return (
    <ProtectedRoute>
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Témoignages</h1>
            <Link
              href="/testimonials/new"
              className="btn-primary"
            >
              Ajouter un témoignage
            </Link>
          </div>
          <TestimonialList testimonials={testimonials} currentUser={currentUser} />
        </div>
      </div>
    </ProtectedRoute>
  )
} 