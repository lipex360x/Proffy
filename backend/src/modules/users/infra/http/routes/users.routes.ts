import { Router } from 'express'

import CreateUsersController from '../controllers/CreateUsersController'
import ListUsersController from '../controllers/ListUsersController'

const router = Router()

const createUsersController = new CreateUsersController()
const listUsersController = new ListUsersController()

router.post('/', createUsersController.create)
router.get('/', listUsersController.index)

export default router
