import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateConnections1607541984499 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'connections',
        columns: [
          {
            name: 'connect_id',
            type: 'uuid',
            isPrimary: true
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
    await queryRunner.dropTable('connections')
  }
}
