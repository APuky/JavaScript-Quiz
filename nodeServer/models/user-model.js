import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  password: { type: String, required: true, minlength: 6 },
  createdAt: { type: Date, default: Date.now() },
  quizTaken: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.isValidatedPassword = async function (userSendPassword) {
  return await bcrypt.compare(userSendPassword, this.password)
}

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET)
}

export default mongoose.model('User', userSchema)
