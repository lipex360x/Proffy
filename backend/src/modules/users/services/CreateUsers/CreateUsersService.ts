import AppError from '@shared/errors/AppError'

import { inject, injectable } from 'tsyringe'

import Users from '@modules/users/infra/typeorm/entities/Users'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'

interface Request{
  name: string
  email: string
  avatar: string
  whatsapp: string
  bio: string
}

@injectable()
export default class CreateUsersService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute ({ name, email, avatar, whatsapp, bio }: Request): Promise<Users> {
    const getUser = await this.repository.findByEmail({ email })

    if (getUser) throw new AppError('This email already exists')

    const user = await this.repository.create({ name, email, avatar, bio, whatsapp })

    return user
  }
}
