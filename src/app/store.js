import { configureStore } from '@reduxjs/toolkit'
import auth from '../features/auth/authSlice'
import program from "../features/program/programSlice"

export const store = configureStore({
  reducer: {
    auth,
    program,
  },
})

