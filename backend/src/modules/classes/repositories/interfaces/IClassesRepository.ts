import Classe from '@modules/classes/infra/typeorm/entities/Classe'

export interface CreateProps {
  subject: string
}

export interface FindBySubjectProps {
  subject: string
}

export interface FindByIdProps {
  class_id: string
}

export default interface IClassesRepository {
  create(data: CreateProps): Promise<Classe>
  findBySubject(data: FindBySubjectProps): Promise<Classe>
  findById(data: FindByIdProps): Promise<Classe>
}
