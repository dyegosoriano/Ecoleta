import express from 'express'
import { resolve } from 'path'

import routes from './routes'

const app = express()

app
  .use(express.json())
  .use(routes)
  .use('/uploads', express.static(resolve(__dirname, '..', 'uploads')))

app.listen(3333)
