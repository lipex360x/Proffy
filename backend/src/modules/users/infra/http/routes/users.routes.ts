import { Router } from 'express'

import CreateUsersController from '../controllers/CreateUsersController'

const router = Router()

const createUsersController = new CreateUsersController()

router.post('/', createUsersController.create)

export default router
