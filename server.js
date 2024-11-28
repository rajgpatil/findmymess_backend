import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

//App Config

const app = express()
const port = process.env.PORT || 4000
// connect with db
connectDB();
// configure the cloudinary
connectCloudinary();

//middleware
// whatever request we get that parse using the json
app.use(express.json())

// using this we can access the  backend from any ip address
app.use(cors())

//api endpoints
// user router
app.use('/api/user',userRouter)
// product router
app.use('/api/product',productRouter)
app.get('/',(req,res)=>{
    res.send('API is Working')
})

app.listen(port,()=>{
    console.log('Server started on PORT : ' + port)
})
