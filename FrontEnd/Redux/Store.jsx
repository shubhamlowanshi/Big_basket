import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})