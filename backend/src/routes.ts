import express from 'express'

import ItemController from './controllers/ItemController'
import PointsController from './controllers/PointsController'

const routes = express.Router()

routes
  .get('/items', ItemController.index)
  .post('/points', PointsController.store)

export default routes
