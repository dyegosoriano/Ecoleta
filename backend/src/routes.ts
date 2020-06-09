import express from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import ItemsController from './controllers/ItemsController'
import PointsController from './controllers/PointsController'

const routes = express.Router()
const upload = multer(multerConfig)

routes
  .get('/items', ItemsController.index)
  .get('/points', PointsController.index)
  .get('/points/:id', PointsController.show)

  .post('/points', upload.single('image'), PointsController.store)

export default routes
