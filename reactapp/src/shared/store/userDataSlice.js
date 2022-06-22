import { createSlice } from '@reduxjs/toolkit'

const initialUserDataState = {
  uid: '',
  username: '',
  email: '',
  token: '',
  quizTaken: '',
  score: '',
}
const userDataSlice = createSlice({
  name: 'User Data',
  initialState: initialUserDataState,
  reducers: {
    setData(state, action) {
      const { uid, username, token, email, quizTaken, score } = action.payload
      state.uid = uid
      state.username = username
      state.token = token
      state.email = email
      state.quizTaken = quizTaken
      state.score = score
    },
    updateData(state, action) {
      const { flag } = action.payload
      switch (flag) {
        case 'QUIZ_TAKEN':
          state.quizTaken = true
          break
        case 'QUIZ_COMPLETED':
          state.score = action.payload.score
          break
        default:
          throw new Error('Wrong flag value')
      }
    },
    clearData(state) {
      state.uid = ''
      state.username = ''
      state.token = ''
      state.email = ''
      state.quizTaken = ''
      state.score = ''
    },
  },
})

export default userDataSlice.reducer
export const userDataActions = userDataSlice.actions
