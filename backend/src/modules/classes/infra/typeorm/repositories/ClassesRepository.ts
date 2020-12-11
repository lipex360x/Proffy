import { Repository, getRepository } from 'typeorm'

import Classe from '@modules/classes/infra/typeorm/entities/Classe'
import IClassesRepository, { CreateProps, FindByIdProps, FindBySubjectProps } from '@modules/classes/repositories/interfaces/IClassesRepository'

export default class ClassesRepository implements IClassesRepository {
  private repository: Repository<Classe>

  constructor () {
    this.repository = getRepository(Classe)
  }

  async create ({ subject }:CreateProps): Promise<Classe> {
    const newClass = this.repository.create({ subject })

    await this.repository.save(newClass)

    return newClass
  }

  async findBySubject ({ subject }:FindBySubjectProps): Promise<Classe> {
    const getClass = await this.repository.findOne({
      where: {
        subject
      }
    })

    return getClass
  }

  async findById ({ class_id }:FindByIdProps): Promise<Classe> {
    const getClass = await this.repository.findOne(class_id)

    return getClass
  }
}
