import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'Authentication',
  initialState: {
    isLoggedIn: false,
    isLoggingIn: false,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
    isLogging(state) {
      state.isLoggingIn = true
    },
    isSigning(state) {
      state.isLoggingIn = false
    },
  },
})

export default authSlice.reducer
export const authActions = authSlice.actions
