import Classe from '@modules/classes/infra/typeorm/entities/Classe'

export interface CreateProps {
  subject: string
}

export interface FindBySubjectProps {
  subject: string
}

export default interface IClassesRepository {
  create(data: CreateProps): Promise<Classe>
  findBySubject(data: FindBySubjectProps): Promise<Classe>
}
