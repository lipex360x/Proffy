import { v4 as uuid } from 'uuid'

import Classe from '@modules/classes/infra/typeorm/entities/Classe'
import IClassesRepository, { CreateProps, FindByIdProps, FindBySubjectProps } from '../interfaces/IClassesRepository'

export default class FakeClassesRepository implements IClassesRepository {
  private repository: Classe[] = []

  async create ({ subject }:CreateProps): Promise<Classe> {
    const classe = new Classe()

    Object.assign(classe, {
      class_id: uuid(),
      subject,
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

  async findById ({ class_id }:FindByIdProps): Promise<Classe> {
    const getClasse = this.repository.find(classe => classe.class_id === class_id)

    return getClasse
  }

  async findAll (): Promise<Classe[]> {
    return this.repository
  }
}
