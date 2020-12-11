import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateUsersService from '@modules/users/services/CreateUsers/CreateUsersService'

export default class CreateUsersController {
  async create (request: Request, response: Response): Promise<Response> {
    const { name, email, avatar, whatsapp, bio } = request.body

    const service = container.resolve(CreateUsersService)

    const createUser = await service.execute({ name, email, avatar, whatsapp, bio })

    return response.json(classToClass(createUser))
  }
}
