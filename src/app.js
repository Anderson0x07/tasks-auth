import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

const app = express();

const dev = 'http://localhost:5173'
const prod = 'https://tasks-app-express.netlify.app'

app.use(cors({
    origin: prod,
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api',authRoutes)
app.use('/api',tasksRoutes)

export default app;