import { v4 as uuid } from 'uuid'

import Users from '@modules/users/infra/typeorm/entities/Users'
import IUsersRepository, { CreateProps, FindByEmailProps, FindByIdProps } from '../interfaces/IUsersRepository'

export default class FakeUsersRepository implements IUsersRepository {
  private repository: Users[] = []

  async create ({ name, email, avatar, whatsapp, bio }:CreateProps): Promise<Users> {
    const user = new Users()

    Object.assign(user, {
      user_id: uuid(),
      name,
      email,
      avatar,
      whatsapp,
      bio,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(user)

    return user
  }

  async findByEmail ({ email }:FindByEmailProps): Promise<Users> {
    const getUser = this.repository.find(user => user.email === email)

    return getUser
  }

  async findById ({ user_id }: FindByIdProps): Promise<Users> {
    const getUser = this.repository.find(user => user.user_id === user_id)

    return getUser
  }

  async findAll (): Promise<Users[]> {
    return this.repository
  }
}
