import express from 'express'
import cors from 'cors'
import { resolve } from 'path'
import { errors } from 'celebrate'

import routes from './routes'

const app = express()

app
  .use(cors())
  .use(express.json())
  .use(routes)
  .use('/uploads', express.static(resolve(__dirname, '..', 'uploads')))

  .use(errors())

  .listen(3333)
