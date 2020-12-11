import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Connections from '@modules/users/infra/typeorm/entities/Connections'
import IConnectionsRepository from '@modules/users/repositories/interfaces/IConnectionsRepository'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'

interface Request{
  user_id: string
}

@injectable()
export default class CreateConnectionsService {
  constructor (
    @inject('ConnectionsRepository')
    private repository: IConnectionsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute ({ user_id }: Request): Promise<Connections> {
    const getUser = await this.usersRepository.findById({ user_id })

    if (!getUser) throw new AppError('User does not exists')

    const newConnection = await this.repository.create({ user_id })

    return newConnection
  }
}
