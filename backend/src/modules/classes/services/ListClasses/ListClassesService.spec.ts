import Faker from 'faker'

import FakeClassesRepository from '@modules/classes/repositories/fakes/FakeClassesRepository'
import ListClassesService from './ListClassesService'

let fakeClassesRepository: FakeClassesRepository
let listClassesService: ListClassesService

describe('ListClasses', () => {
  beforeEach(() => {
    fakeClassesRepository = new FakeClassesRepository()
    listClassesService = new ListClassesService(fakeClassesRepository)
  })

  it('should be able to list classes', async () => {
    await fakeClassesRepository.create({
      subject: Faker.random.word()
    })

    await fakeClassesRepository.create({
      subject: Faker.random.word()
    })

    await fakeClassesRepository.create({
      subject: Faker.random.word()
    })

    const getClasses = await listClassesService.execute()

    expect(getClasses.length).toEqual(3)
  })
})
