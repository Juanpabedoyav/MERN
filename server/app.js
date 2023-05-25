import express from 'express'
import morgan from 'morgan'
import shippingRoutes from './routes/index.js'
import cors from 'cors'

// const path = require('path');

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//cors
app.use(cors())

//Routes
app.use('/api/shippings', shippingRoutes)

//Static files

export default app