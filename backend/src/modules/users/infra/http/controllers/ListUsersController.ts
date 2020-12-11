import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListUsersService from '@modules/users/services/ListUsers/ListUsersService'

export default class ListUsersController {
  async index (request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListUsersService)

    const listUsers = await service.execute()

    return response.json(classToClass(listUsers))
  }
}
