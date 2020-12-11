
import { Repository, getRepository } from 'typeorm'

import Class_Teacher from '@modules/classes/infra/typeorm/entities/Class_Teacher'
import IClassTeacherRepository, { CreateProps } from '@modules/classes/repositories/interfaces/IClassTeacherRepository'

export default class FakeClassTeacherRepository implements IClassTeacherRepository {
  private repository: Repository<Class_Teacher>

  constructor () {
    this.repository = getRepository(Class_Teacher)
  }

  async create ({ user_id, class_id, cost, class_schedule }:CreateProps): Promise<Class_Teacher> {
    const classTeacher = this.repository.create({ user_id, class_id, cost, class_schedule })

    await this.repository.save(classTeacher)

    return classTeacher
  }
}
