import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'
dotenv.config({
    path:"./.env"
})

const PORT=process.env.PORT|| 4000

const app=express()
app.use(express.json())
app.use(cors())

await connectDB();

app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.get('/',(req,res)=>res.send("API Working fine"))

app.listen(PORT,()=>console.log('server running on port '+PORT))