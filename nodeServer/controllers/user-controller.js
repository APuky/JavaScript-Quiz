import { validationResult } from 'express-validator'

import HttpError from '../utils/http-error.js'
import User from '../models/user-model.js'
import cookieToken from '../utils/cookieToken.js'

export const getAllUsers = async (req, res, next) => {
  let users
  try {
    users = await User.find(
      {},
      { password: 0, email: 0, role: 0, createdAt: 0 },
    )
  } catch (e) {
    return next(new HttpError('Something went wrong, please try again', 500))
  }
  if (users.length === 0) return next(new HttpError('No users found'))
  const filteredUsers = users.filter((user) => user.quizTaken === true)
  res.status(200).json({ success: true, users: filteredUsers })
}

export const signup = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422),
    )

  const { username, email, password } = req.body

  try {
    const existingEmail = await User.findOne({ email })
    const existingUsername = await User.findOne({ username })
    if (existingEmail) return next(new HttpError('Email already exists', 422))
    if (existingUsername) return next(new HttpError('Username is taken', 422))
  } catch (e) {
    return next(new HttpError('Signing up failed, please try again', 500))
  }

  const newUser = await User.create({
    username,
    email,
    password,
  })
  cookieToken(newUser, res)
}

export const login = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422),
    )

  const { username, password } = req.body
  let user
  try {
    user = await User.findOne({ username })
  } catch (e) {
    return next(new HttpError('Logging in failed, Please try again', 500))
  }

  if (!user)
    return next(
      new HttpError("Username doesn't exists, please signup instead", 403),
    )

  const isPasswordCorrect = await user.isValidatedPassword(password)

  if (!isPasswordCorrect) return next(new HttpError('Wrong password', 400))

  cookieToken(user, res)
}

export const logout = async (req, res, next) => {
  try {
    res.cookie('token', null, { expires: new Date(Date.now()), httpOnly: true })
    res.status(200).json({ success: true, message: 'Logout success' })
  } catch (e) {
    return next(new HttpError('Something went wrong, please try again', 500))
  }
}

export const updateQuizStatus = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422),
    )

  const { uid, flag } = req.body
  let user
  try {
    user = await User.findById(uid)
  } catch (e) {
    return next(new HttpError('Something went wrong, please try again', 500))
  }
  if (!user) return next(new HttpError('No user with that id exits', 422))

  switch (flag) {
    case 'QUIZ_TAKEN':
      user.quizTaken = true
      break
    case 'QUIZ_COMPLETED':
      user.score = req.body.score
      break
    default:
      return next(new HttpError('Wrong flag input', 422))
  }

  try {
    await user.save()
  } catch (e) {
    return next(new HttpError('Something went wrong, please try again', 500))
  }
  user.password = undefined
  user.__v = undefined
  res.status(200).json({ success: true, user })
}
