import { v4 as uuid } from 'uuid'

import Connections from '@modules/users/infra/typeorm/entities/Connections'
import IConnectionsRepository, { CreateProps, FindByUserIdProps } from '../interfaces/IConnectionsRepository'

export default class FakeConnectionsRepository implements IConnectionsRepository {
  private repository: Connections[] = []

  async create ({ user_id }:CreateProps): Promise<Connections> {
    const connection = new Connections()

    Object.assign(connection, {
      connection_id: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(connection)

    return connection
  }

  async findByUserId ({ user_id }:FindByUserIdProps): Promise<Connections[]> {
    const getConnections = this.repository.filter(connection => connection.user_id === user_id)

    return getConnections
  }
}
