import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm'

export default class FKclassIdInClassTeachers1607542869028
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'class_teachers',
      new TableColumn({
        name: 'class_id',
        type: 'uuid',
        isNullable: true
      })
    )

    await queryRunner.createForeignKey(
      'class_teachers',
      new TableForeignKey({
        name: 'class_teachers_To_classes',
        columnNames: ['class_id'],

        referencedTableName: 'classes',
        referencedColumnNames: ['class_id'],

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('class_teachers', 'class_teachers_To_classes')
    await queryRunner.dropColumn('class_teachers', 'class_id')
  }
}
