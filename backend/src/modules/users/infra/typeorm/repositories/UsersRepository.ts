import { Repository, getRepository } from 'typeorm'

import Users from '@modules/users/infra/typeorm/entities/Users'
import IUsersRepository, { CreateProps, FindByEmailProps, FindByIdProps } from '@modules/users/repositories/interfaces/IUsersRepository'

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>

  constructor () {
    this.repository = getRepository(Users)
  }

  async create ({ name, email, avatar, whatsapp, bio }:CreateProps): Promise<Users> {
    const newUser = this.repository.create({ name, email, avatar, bio, whatsapp })

    await this.repository.save(newUser)

    return newUser
  }

  async findByEmail ({ email }:FindByEmailProps): Promise<Users> {
    const getUser = await this.repository.findOne({
      where: {
        email
      }
    })

    return getUser
  }

  async findById ({ user_id }: FindByIdProps): Promise<Users> {
    const getUser = await this.repository.findOne(user_id)

    return getUser
  }
}
