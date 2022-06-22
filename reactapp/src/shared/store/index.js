import { configureStore } from '@reduxjs/toolkit'
import userData from './userDataSlice'
import auth from './authSlice'

const store = configureStore({
  reducer: { auth, userData },
})

export default store
