import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateUsers1607539779395 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
            isPrimary: true
          },

          {
            name: 'name',
            type: 'varchar'
          },

          {
            name: 'avatar',
            type: 'varchar'
          },

          {
            name: 'whatsapp',
            type: 'varchar'
          },

          {
            name: 'email',
            type: 'varchar'
          },

          {
            name: 'bio',
            type: 'text'
          },

          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },

          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
