import dotenv from 'dotenv'

dotenv.config()
import express from 'express'

import dbconnect from './config/dbconnect.js'


import userRoutes from './routes/userRoutes.js'
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'

const app=express()

app.use(cors())

const port=process.env.port

const DATABASE_URL=process.env.DATABASE_URL

dbconnect(DATABASE_URL)

app.use(express.json())
app.use("/api/user",userRoutes)
app.use("/api/book",bookRoutes)

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})