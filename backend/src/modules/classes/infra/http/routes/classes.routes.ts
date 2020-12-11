import { Router } from 'express'

import CreateClassesController from '../controllers/CreateClassesController'

const router = Router()

const createClassesController = new CreateClassesController()

router.post('/', createClassesController.create)

export default router
