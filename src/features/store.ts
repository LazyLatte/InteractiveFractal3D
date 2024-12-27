import { configureStore } from '@reduxjs/toolkit'
import fractalReducer from './reducers//fractalSlice'

const store = configureStore({
  reducer: {
    fractal: fractalReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch