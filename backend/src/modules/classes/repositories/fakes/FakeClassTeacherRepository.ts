import { v4 as uuid } from 'uuid'

import Class_Teacher from '@modules/classes/infra/typeorm/entities/Class_Teacher'
import IClassTeacherRepository, { CreateProps } from '../interfaces/IClassTeacherRepository'

export default class FakeClassTeacherRepository implements IClassTeacherRepository {
  private repository: Class_Teacher[] = []

  async create ({ user_id, class_id, cost, class_schedule }:CreateProps): Promise<Class_Teacher> {
    const newClassTeacher = new Class_Teacher()

    Object.assign(newClassTeacher, {
      class_teacher_id: uuid(),
      user_id,
      class_id,
      cost,
      class_schedule,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(newClassTeacher)

    return newClassTeacher
  }
}
