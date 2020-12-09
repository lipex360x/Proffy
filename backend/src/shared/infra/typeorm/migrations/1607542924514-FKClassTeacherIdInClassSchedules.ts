import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm'

export default class FKClassTeacherIdInClassSchedules1607542924514
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'class_schedules',
      new TableColumn({
        name: 'class_teacher_id',
        type: 'uuid',
        isNullable: true
      })
    )

    await queryRunner.createForeignKey(
      'class_schedules',
      new TableForeignKey({
        name: 'class_schedules_To_class_teachers',
        columnNames: ['class_teacher_id'],

        referencedTableName: 'class_teachers',
        referencedColumnNames: ['class_teacher_id'],

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('class_schedules', 'class_schedules_To_class_teachers')
    await queryRunner.dropColumn('class_schedules', 'class_teacher_id')
  }
}
