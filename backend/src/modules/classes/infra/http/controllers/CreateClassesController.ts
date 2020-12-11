import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateClassesService from '@modules/classes/services/CreateClasses/CreateClassesService'

export default class CreateClassesController {
  async create (request: Request, response: Response): Promise<Response> {
    const { subject } = request.body

    const service = container.resolve(CreateClassesService)

    const createClass = await service.execute({ subject })

    return response.json(classToClass(createClass))
  }
}
