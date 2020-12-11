import { Router } from 'express'

import ListClassesController from '../controllers/ListClassesController'
import CreateClassesController from '../controllers/CreateClassesController'
import CreateClassTeacherController from '../controllers/CreateClassTeacherController'

const router = Router()

const listClassesController = new ListClassesController()

const createClassesController = new CreateClassesController()
const createClassTeacherController = new CreateClassTeacherController()

router.get('/', listClassesController.index)

router.post('/', createClassesController.create)
router.post('/classTeacher', createClassTeacherController.create)

export default router
