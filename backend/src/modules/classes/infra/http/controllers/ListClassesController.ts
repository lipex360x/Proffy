import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListClassesService from '@modules/classes/services/ListClasses/ListClassesService'

export default class ListClassesController {
  async index (request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListClassesService)

    const listClasses = await service.execute()

    return response.json(classToClass(listClasses))
  }
}
