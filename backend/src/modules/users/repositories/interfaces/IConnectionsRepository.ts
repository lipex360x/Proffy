import Connections from '@modules/users/infra/typeorm/entities/Connections'

export interface CreateProps {
  user_id: string
}

export interface FindByUserIdProps {
  user_id: string
}

export default interface IConnectionsRepository {
  create(data: CreateProps): Promise<Connections>
  findByUserId(data: FindByUserIdProps): Promise<Connections[]>
}
