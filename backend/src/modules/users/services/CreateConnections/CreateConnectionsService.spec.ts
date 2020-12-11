import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeConnectionsRepository from '@modules/users/repositories/fakes/FakeConnectionsRepository'
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import CreateConnectionsService from './CreateConnectionsService'

let fakeConnectionsRepository: FakeConnectionsRepository
let fakeUsersRepository: FakeUsersRepository
let createConnectionsService: CreateConnectionsService

describe('TEST_NAME', () => {
  beforeEach(() => {
    fakeConnectionsRepository = new FakeConnectionsRepository()
    fakeUsersRepository = new FakeUsersRepository()
    createConnectionsService = new CreateConnectionsService(fakeConnectionsRepository, fakeUsersRepository)
  })

  it('should be able to create a new connection', async () => {
    const user = await fakeUsersRepository.create({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      bio: Faker.lorem.text(),
      avatar: Faker.image.image(),
      whatsapp: Faker.phone.phoneNumber()
    })

    const newConnection = await createConnectionsService.execute({ user_id: user.user_id })

    expect(newConnection).toHaveProperty('connection_id')
  })

  it('should not be able to create a connect to non-existing user', async () => {
    await expect(
      createConnectionsService.execute({ user_id: 'non-existing' })
    ).rejects.toBeInstanceOf(AppError)
  })
})
