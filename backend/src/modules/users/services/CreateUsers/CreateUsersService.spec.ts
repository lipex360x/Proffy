import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import CreateUsersService from './CreateUsersService'

let fakeUsersRepository: FakeUsersRepository
let createUsersService: CreateUsersService

describe('CreateUsers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    createUsersService = new CreateUsersService(fakeUsersRepository)
  })

  it('should be able to Create a new User', async () => {
    const newUser = await createUsersService.execute({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      bio: Faker.lorem.text(),
      avatar: Faker.image.image(),
      whatsapp: Faker.phone.phoneNumber()
    })

    expect(newUser).toHaveProperty('user_id')
  })

  it('should not be able to create a user with duplicate email', async () => {
    await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: 'already@mail.com',
      bio: Faker.lorem.text(),
      avatar: Faker.image.image(),
      whatsapp: Faker.phone.phoneNumber()
    })

    await expect(
      createUsersService.execute({
        name: Faker.name.firstName(),
        email: 'already@mail.com',
        bio: Faker.lorem.text(),
        avatar: Faker.image.image(),
        whatsapp: Faker.phone.phoneNumber()
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
