"use client"

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/authSlice'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(logout())
    router.push('/login')
  }, [dispatch, router])

  return null
} 