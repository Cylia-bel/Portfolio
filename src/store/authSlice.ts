import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string
  email: string
  password: string
}

interface AuthState {
  users: User[]
  currentUser: User | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      const userExists = state.users.some(
        (user) => user.email === action.payload.email
      )
      if (!userExists) {
        state.users.push(action.payload)
      }
    },
    login: (state, action: PayloadAction<User>) => {
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      )
      if (user) {
        state.currentUser = user
        state.isAuthenticated = true
      }
    },
    logout: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
    },
  },
})

export const { register, login, logout } = authSlice.actions
export default authSlice.reducer 