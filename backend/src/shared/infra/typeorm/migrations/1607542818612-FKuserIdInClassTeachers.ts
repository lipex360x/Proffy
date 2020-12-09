import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm'

export default class FKuserIdInClassTeachers1607542818612
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'class_teachers',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true
      })
    )

    await queryRunner.createForeignKey(
      'class_teachers',
      new TableForeignKey({
        name: 'class_teachers_To_users',
        columnNames: ['user_id'],

        referencedTableName: 'users',
        referencedColumnNames: ['user_id'],

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('class_teachers', 'class_teachers_To_users')
    await queryRunner.dropColumn('class_teachers', 'user_id')
  }
}
