import Faker from 'faker'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import ListUsersService from './ListUsersService'

let fakeUsersRepository: FakeUsersRepository
let listUsersService: ListUsersService

describe('ListUsers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    listUsersService = new ListUsersService(fakeUsersRepository)
  })

  it('should be able to list users', async () => {
    await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      bio: Faker.lorem.text(),
      avatar: Faker.image.image(),
      whatsapp: Faker.phone.phoneNumber()
    })

    await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      bio: Faker.lorem.text(),
      avatar: Faker.image.image(),
      whatsapp: Faker.phone.phoneNumber()
    })

    await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      bio: Faker.lorem.text(),
      avatar: Faker.image.image(),
      whatsapp: Faker.phone.phoneNumber()
    })

    const getUsers = await listUsersService.execute()

    expect(getUsers.length).toEqual(3)
  })
})
