import { configureStore } from '@reduxjs/toolkit'
import auth from '../features/auth/authSlice'
import asistentes from '../features/asistentes/asistentesSlice'

export const store = configureStore({
  reducer: {
    auth,
    asistentes
  },
})

