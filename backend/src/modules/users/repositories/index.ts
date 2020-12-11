import { container } from 'tsyringe'

import IUsersRepository from './interfaces/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

const providers = {
  postgres: UsersRepository
}

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  providers.postgres
)
