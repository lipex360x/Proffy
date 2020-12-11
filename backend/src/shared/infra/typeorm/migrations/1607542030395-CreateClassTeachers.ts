import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateClassTeachers1607542030395 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'class_teachers',
        columns: [
          {
            name: 'class_teacher_id',
            type: 'uuid',
            isPrimary: true
          },

          {
            name: 'cost',
            type: 'decimal',
            scale: 2
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
    await queryRunner.dropTable('class_teachers')
  }
}
