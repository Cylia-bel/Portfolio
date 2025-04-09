'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { TestimonialForm } from '@/components/Testimonial/TestimonialForm'
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute'

export default function EditTestimonialPage({ params }: { params: { id: string } }) {
  const testimonials = useSelector((state: RootState) => state.testimonials.testimonials)
  const testimonial = testimonials.find(t => t.id === params.id)

  if (!testimonial) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">Témoignage non trouvé</p>
        </div>
      </div>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialForm testimonial={testimonial} onClose={() => window.history.back()} />
        </div>
      </div>
    </ProtectedRoute>
  )
} 