import { inject, injectable } from 'tsyringe'

import Users from '@modules/users/infra/typeorm/entities/Users'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'

@injectable()
export default class ListUsersService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute (): Promise<Users[]> {
    const getUsers = await this.repository.findAll()

    return getUsers
  }
}
