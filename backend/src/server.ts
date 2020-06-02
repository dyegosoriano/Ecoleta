import express from 'express'
import routes from './routes'
import { resolve } from 'path'

const app = express()

app.use(express.json())
  .use(routes)
  .use('/uploads', express.static(resolve(__dirname, '..', 'uploads')))

app.listen(3333)
