import express from 'express'
import cors from 'cors'
import { sampleProducts } from './data'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { productRouter } from './router/productRouter'
import { seedRouter } from './router/seedRouter'
import { userRouter } from './router/userRouter'
import { orderRouter } from './router/orderRouter'
import { keyRouter } from './router/keyRouter'

dotenv.config()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO!)
    .then(()=>{
        console.log('connected to mongodb')
    })
    .catch((error)=>{
        console.log(error)
    })

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get('/api/products', (req: Request, res: Response) =>{
//     res.json(sampleProducts)
// })

// app.get('/api/products/:slug', (req: Request, res: Response) =>{
//     res.json(sampleProducts.find((x) => x.slug === req.params.slug))
// })

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/seed', seedRouter)
app.use('/api/orders', orderRouter)
app.use('/api/keys', keyRouter)

const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`Server listening on port: http://localhost:${PORT}`)
})