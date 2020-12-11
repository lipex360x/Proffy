import { Router } from 'express'

import CreateClassesController from '../controllers/CreateClassesController'
import ListClassesController from '../controllers/ListClassesController'

const router = Router()

const createClassesController = new CreateClassesController()
const listClassesController = new ListClassesController()

router.post('/', createClassesController.create)
router.get('/', listClassesController.index)

export default router
