import { container } from 'tsyringe'

import IClassesRepository from './interfaces/IClassesRepository'
import ClassesRepository from '@modules/classes/infra/typeorm/repositories/ClassesRepository'

const providers = {
  postgres: ClassesRepository
}

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  providers.postgres
)
