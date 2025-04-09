'use client'

import { TestimonialForm } from '@/components/Testimonial/TestimonialForm'
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute'

export default function NewTestimonialPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Ajouter un témoignage</h1>
            <TestimonialForm onClose={() => window.history.back()} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
} 