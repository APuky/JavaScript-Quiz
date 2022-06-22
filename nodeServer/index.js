import app from './app.js'
import 'dotenv/config'
import connectWithDb from './config/db.js'

const { PORT } = process.env

connectWithDb()
app.listen(PORT, () => console.log(`Server is up at ${PORT}`))
