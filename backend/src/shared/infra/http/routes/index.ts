import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import classesRouter from '@modules/classes/infra/http/routes/classes.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/classes', classesRouter)

export default routes
