import Class_Teacher from '@modules/classes/infra/typeorm/entities/Class_Teacher'

interface ScheduleProps {
  week_day: number
  start_schedule: number
  end_schedule: number
}

export interface CreateProps {
  user_id: string
  class_id: string
  cost: number
  class_schedule: ScheduleProps[]
}

export default interface IClassTeacherRepository {
  create(data: CreateProps): Promise<Class_Teacher>
}
