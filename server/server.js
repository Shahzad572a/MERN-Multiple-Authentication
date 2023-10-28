import express from 'express'
import dotenv from'dotenv'
import path from 'path'
// import database from'./config/database.js'
import colors from 'colors'
import authRouts from './routes/auth.js'


dotenv.config()
// database()  


const app = express()
app.use('/api',authRouts)

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`server is runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    )