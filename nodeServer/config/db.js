import mongoose from 'mongoose'

const connectWithDb = () => {
  const { DB_USER, DB_PASSWORD, DB_NAME } = process.env
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivkl1zv.mongodb.net/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(console.log('DB got connected'))
    .catch((error) => {
      console.log(`DB connection issues`)
      console.log(error)
      process.exit(1)
    })
}

export default connectWithDb
