"use client"

import { useState } from 'react'
import { Testimonial } from '@/types/testimonial'
import { User } from '@/types/user'
import { TestimonialCard } from './TestimonialCard'
import { TestimonialForm } from './TestimonialForm'

interface TestimonialListProps {
  testimonials: Testimonial[]
  currentUser: User | null
}

export function TestimonialList({ testimonials, currentUser }: TestimonialListProps) {
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)

  return (
    <div className="space-y-8">
      {testimonials.length === 0 ? (
        <p className="text-center text-gray-500">Aucun témoignage pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              currentUser={currentUser}
              onEdit={() => setEditingTestimonial(testimonial)}
            />
          ))}
        </div>
      )}

      {editingTestimonial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <TestimonialForm
              testimonial={editingTestimonial}
              onClose={() => setEditingTestimonial(null)}
            />
          </div>
        </div>
      )}
    </div>
  )
} 