"use client"

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { addTestimonial, updateTestimonial } from '@/store/testimonialSlice'
import { Testimonial } from '@/types/testimonial'

interface TestimonialFormProps {
  testimonial?: Testimonial
  onClose: () => void
}

export function TestimonialForm({ testimonial, onClose }: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    rating: 5,
  })
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const currentUser = useSelector((state: RootState) => state.auth.currentUser)

  useEffect(() => {
    if (testimonial) {
      setFormData({
        author: testimonial.author,
        content: testimonial.content,
        rating: testimonial.rating,
      })
    }
  }, [testimonial])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.author || !formData.content) {
      setError('Veuillez remplir tous les champs')
      return
    }

    const newTestimonial: Testimonial = {
      id: testimonial?.id || Date.now().toString(),
      author: formData.author,
      content: formData.content,
      rating: formData.rating,
      createdAt: testimonial?.createdAt || new Date().toISOString(),
      userId: currentUser?.id || '',
    }

    if (testimonial) {
      dispatch(updateTestimonial(newTestimonial))
    } else {
      dispatch(addTestimonial(newTestimonial))
    }

    onClose()
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Nom
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700"
        >
          Note
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="btn-secondary"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="btn-primary"
        >
          {testimonial ? 'Modifier' : 'Ajouter'}
        </button>
      </div>
    </form>
  )
} 