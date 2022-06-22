import express from 'express'
import { check } from 'express-validator'

import {
  signup,
  login,
  logout,
  getAllUsers,
  updateQuizStatus,
} from '../controllers/user-controller.js'
import { isLoggedIn } from '../middleware/user-middleware.js'

const router = express.Router()

router.get('/', getAllUsers)

router.post(
  '/signup',
  [
    check('username').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  signup,
)

router.post(
  '/login',
  [check('username').not().isEmpty(), check('password').isLength({ min: 6 })],
  login,
)

router.get('/logout', isLoggedIn, logout)

router.patch(
  '/update_quiz_status',
  isLoggedIn,
  [check('uid').not().isEmpty(), check('flag').not().isEmpty()],
  updateQuizStatus,
)

export default router
