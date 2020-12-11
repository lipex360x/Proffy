import { v4 as uuid } from 'uuid'

import Classe from '@modules/classes/infra/typeorm/entities/Classe'
import IClassesRepository, { CreateProps, FindBySubjectProps } from '../interfaces/IClassesRepository'

export default class FakeClassesRepository implements IClassesRepository {
  private repository: Classe[] = []

  async create ({ subject, cost }:CreateProps): Promise<Classe> {
    const classe = new Classe()

    Object.assign(classe, {
      class_id: uuid(),
      subject,
      cost,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(classe)

    return classe
  }

  async findBySubject ({ subject }:FindBySubjectProps): Promise<Classe> {
    const getClasse = this.repository.find(classe => classe.subject === subject)

    return getClasse
  }
}
