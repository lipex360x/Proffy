import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateClassTeacherService from '@modules/classes/services/CreateClassTeacher/CreateClassTeacherService'
import convertHourToMinute from '@shared/utils/convertHourToMinutes'

interface ScheduleProps {
  week_day: number
  start_schedule: string
  end_schedule: string
}

export default class CreateClassTeacherController {
  async create (request: Request, response: Response): Promise<Response> {
    const { user_id, class_id, cost, class_schedule } = request.body

    const service = container.resolve(CreateClassTeacherService)

    const parsedClassSchedule = class_schedule.map((scheduleItem: ScheduleProps) => {
      return {
        week_day: scheduleItem.week_day,
        start_schedule: convertHourToMinute({ time: scheduleItem.start_schedule }),
        end_schedule: convertHourToMinute({ time: scheduleItem.end_schedule })
      }
    })

    const createClassTeacher = await service.execute({
      user_id,
      class_id,
      cost,
      class_schedule: parsedClassSchedule
    })

    return response.json(classToClass(createClassTeacher))
  }
}
