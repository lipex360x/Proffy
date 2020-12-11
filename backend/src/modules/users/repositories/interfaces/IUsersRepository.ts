import Users from '@modules/users/infra/typeorm/entities/Users'

export interface CreateProps {
  name: string
  email: string
  avatar: string
  whatsapp: string
  bio: string
}

export interface FindByEmailProps{
  email: string
}

export default interface IUsersRepository {
  create(data: CreateProps): Promise<Users>
  findByEmail(data: FindByEmailProps): Promise<Users>
}
