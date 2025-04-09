'use client'

import { Testimonial } from '@/types/testimonial'
import { User } from '@/types/user'
import { FaStar, FaTrash, FaEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteTestimonial } from '@/store/testimonialSlice'

interface TestimonialCardProps {
  testimonial: Testimonial
  currentUser: User | null
  onEdit: () => void
}

export function TestimonialCard({ testimonial, currentUser, onEdit }: TestimonialCardProps) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) {
      dispatch(deleteTestimonial(testimonial.id))
    }
  }

  const canEdit = currentUser?.id === testimonial.userId

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {testimonial.author}
          </h3>
        </div>
        {canEdit && (
          <div className="flex items-center space-x-2">
            <button
              onClick={onEdit}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaEdit />
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-800"
            >
              <FaTrash />
            </button>
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700">{testimonial.content}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        {new Date(testimonial.createdAt).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </div>
  )
} 