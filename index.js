import express from 'express'
import { connectDB }  from './services/database.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.use(bodyParser.json())

connectDB()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

