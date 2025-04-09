import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Testimonial } from '@/types/testimonial'

interface TestimonialState {
  testimonials: Testimonial[]
}

const initialState: TestimonialState = {
  testimonials: [
    {
      id: '1',
      author: 'Jean Dupont',
      content: 'Cylia a été d\'une grande aide dans la réalisation de notre projet web. Son expertise en React et Next.js a été précieuse.',
      rating: 5,
      createdAt: new Date('2024-01-15').toISOString(),
      userId: 'user1'
    },
    {
      id: '2',
      author: 'Marie Martin',
      content: 'Un travail remarquable ! Cylia a su comprendre nos besoins et les traduire en une application performante et élégante.',
      rating: 4,
      createdAt: new Date('2024-02-20').toISOString(),
      userId: 'user2'
    },
    {
      id: '3',
      author: 'Pierre Durand',
      content: 'Collaboration excellente avec Cylia. Son approche méthodique et sa créativité ont fait toute la différence sur notre projet.',
      rating: 5,
      createdAt: new Date('2024-03-10').toISOString(),
      userId: 'user3'
    }
  ]
}

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    addTestimonial: (state, action: PayloadAction<Testimonial>) => {
      state.testimonials.push(action.payload)
    },
    updateTestimonial: (state, action: PayloadAction<Testimonial>) => {
      const index = state.testimonials.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.testimonials[index] = action.payload
      }
    },
    deleteTestimonial: (state, action: PayloadAction<string>) => {
      state.testimonials = state.testimonials.filter(t => t.id !== action.payload)
    },
  },
})

export const { addTestimonial, updateTestimonial, deleteTestimonial } = testimonialSlice.actions
export default testimonialSlice.reducer 