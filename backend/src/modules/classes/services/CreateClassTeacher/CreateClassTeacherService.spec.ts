import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeClassTeacherRepository from '@modules/classes/repositories/fakes/FakeClassTeacherRepository'
import FakeClassesRepository from '@modules/classes/repositories/fakes/FakeClassesRepository'
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'

import CreateClassTeacherService from './CreateClassTeacherService'

let fakeClassTeacherRepository: FakeClassTeacherRepository
let fakeClassesRepository: FakeClassesRepository
let fakeUsersRepository: FakeUsersRepository

let createClassTeacherService: CreateClassTeacherService

describe('CreateClassTeacher', () => {
  beforeEach(() => {
    fakeClassTeacherRepository = new FakeClassTeacherRepository()
    fakeClassesRepository = new FakeClassesRepository()
    fakeUsersRepository = new FakeUsersRepository()

    createClassTeacherService = new CreateClassTeacherService(fakeClassTeacherRepository, fakeUsersRepository, fakeClassesRepository)
  })

  it('should be able to create a new class teacher', async () => {
    const user = await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      bio: Faker.lorem.text(),
      avatar: Faker.image.image(),
      whatsapp: Faker.phone.phoneNumber()
    })

    const classe = await fakeClassesRepository.create({
      subject: Faker.random.word()
    })

    const newClassTeacher = await createClassTeacherService.execute({
      user_id: user.user_id,
      class_id: classe.class_id,
      cost: 20,
      class_schedule: [
        { week_day: 2, start_schedule: 480, end_schedule: 720 },
        { week_day: 3, start_schedule: 480, end_schedule: 720 },
        { week_day: 4, start_schedule: 480, end_schedule: 720 }
      ]
    })

    expect(newClassTeacher).toHaveProperty('class_teacher_id')
  })

  it('should not be able to create a new class teacher to non-existing user', async () => {
    const classe = await fakeClassesRepository.create({
      subject: Faker.random.word()
    })

    await expect(
      createClassTeacherService.execute({
        user_id: Faker.random.uuid(),
        class_id: classe.class_id,
        cost: 20,
        class_schedule: [
          { week_day: 2, start_schedule: 480, end_schedule: 720 },
          { week_day: 3, start_schedule: 480, end_schedule: 720 },
          { week_day: 4, start_schedule: 480, end_schedule: 720 }
        ]
      })).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new class teacher to non-existing classe', async () => {
    const user = await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      bio: Faker.lorem.text(),
      avatar: Faker.image.image(),
      whatsapp: Faker.phone.phoneNumber()
    })

    await expect(
      createClassTeacherService.execute({
        user_id: user.user_id,
        class_id: Faker.random.uuid(),
        cost: 20,
        class_schedule: [
          { week_day: 2, start_schedule: 480, end_schedule: 720 },
          { week_day: 3, start_schedule: 480, end_schedule: 720 },
          { week_day: 4, start_schedule: 480, end_schedule: 720 }
        ]
      })).rejects.toBeInstanceOf(AppError)
  })
})
