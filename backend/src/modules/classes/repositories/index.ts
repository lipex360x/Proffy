import { container } from 'tsyringe'

import IClassesRepository from './interfaces/IClassesRepository'
import ClassesRepository from '@modules/classes/infra/typeorm/repositories/ClassesRepository'

import IClassTeacherRepository from './interfaces/IClassTeacherRepository'
import ClassTeacherRepository from '@modules/classes/infra/typeorm/repositories/ClassTeacherRepository'

import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

const providers = {
  classePostgres: ClassesRepository,
  classTeacherPostgres: ClassTeacherRepository,
  usersPostgres: UsersRepository
}

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  providers.classePostgres
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  providers.usersPostgres
)

container.registerSingleton<IClassTeacherRepository>(
  'ClassTeacherRepository',
  providers.classTeacherPostgres
)
