import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class ClassSchedules1607542322600 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'class_schedules',
        columns: [
          {
            name: 'class_schedule_id',
            type: 'uuid',
            isPrimary: true
          },

          {
            name: 'week_day',
            type: 'integer'
          },

          {
            name: 'start_schedule',
            type: 'integer'
          },

          {
            name: 'end_schedule',
            type: 'integer'
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
    await queryRunner.dropTable('class_schedules')
  }
}
