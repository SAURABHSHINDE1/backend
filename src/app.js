import express from 'express'
import router from './routes/userRoutes.js'
const app = express()

 app.use('/user' , router)

export default app