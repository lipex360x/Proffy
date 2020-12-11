import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Class_Teacher from '@modules/classes/infra/typeorm/entities/Class_Teacher'
import IClassTeacherRepository from '@modules/classes/repositories/interfaces/IClassTeacherRepository'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'
import IClassesRepository from '@modules/classes/repositories/interfaces/IClassesRepository'

interface ScheduleProps {
  week_day: number
  start_schedule: number
  end_schedule: number
}

export interface Request {
  user_id: string
  class_id: string
  cost: number
  class_schedule: ScheduleProps[]
}

@injectable()
export default class CreateClassTeacherService {
  constructor (
    @inject('ClassTeacherRepository')
    private repository: IClassTeacherRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('ClassesRepository')
    private classesRepository: IClassesRepository
  ) {}

  async execute ({ user_id, class_id, cost, class_schedule }: Request): Promise<Class_Teacher> {
    const getUser = await this.usersRepository.findById({ user_id })

    if (!getUser) throw new AppError('This User does not exists')

    const getClass = await this.classesRepository.findById({ class_id })

    if (!getClass) throw new AppError('This Class does not exists')

    const newClassTeacher = await this.repository.create({ user_id, class_id, cost, class_schedule })

    return newClassTeacher
  }
}
