import Faker from 'faker'

import AppError from '@shared/errors/AppError'

import FakeClassesRepository from '@modules/classes/repositories/fakes/FakeClassesRepository'
import CreateClassesService from './CreateClassesService'

let fakeClassesRepository: FakeClassesRepository
let createClassesService: CreateClassesService

describe('CreateClasses', () => {
  beforeEach(() => {
    fakeClassesRepository = new FakeClassesRepository()
    createClassesService = new CreateClassesService(fakeClassesRepository)
  })

  it('should be able to create a class', async () => {
    const newClass = await createClassesService.execute({
      subject: Faker.random.word(),
      cost: 20.00
    })

    expect(newClass).toHaveProperty('class_id')
  })

  it('shold not be able to create a class with subject duplicated', async () => {
    const newClass = await createClassesService.execute({
      subject: Faker.random.word(),
      cost: 20.00
    })

    await expect(
      createClassesService.execute({
        subject: newClass.subject,
        cost: 40.00
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
