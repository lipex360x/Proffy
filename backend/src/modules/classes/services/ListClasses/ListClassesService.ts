import { inject, injectable } from 'tsyringe'

import Classe from '@modules/classes/infra/typeorm/entities/Classe'
import IClassesRepository from '@modules/classes/repositories/interfaces/IClassesRepository'

@injectable()
export default class ListClassesService {
  constructor (
    @inject('ClassesRepository')
    private repository: IClassesRepository
  ) {}

  async execute (): Promise<Classe[]> {
    const getClasses = await this.repository.findAll()

    return getClasses
  }
}
