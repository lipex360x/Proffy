import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Classe from '@modules/classes/infra/typeorm/entities/Classe'
import IClassesRepository from '@modules/classes/repositories/interfaces/IClassesRepository'

interface Request{
  subject: string
}

@injectable()
export default class CreateClassesService {
  constructor (
    @inject('ClassesRepository')
    private repository: IClassesRepository
  ) {}

  async execute ({ subject }: Request): Promise<Classe> {
    const getClass = await this.repository.findBySubject({ subject })

    if (getClass) throw new AppError('This class already exists')

    const newClass = await this.repository.create({ subject })

    return newClass
  }
}
