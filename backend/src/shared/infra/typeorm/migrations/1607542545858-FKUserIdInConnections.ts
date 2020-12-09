import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm'

export default class FKUserIdInConnections1607542545858
implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'connections',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true
      })
    )

    await queryRunner.createForeignKey(
      'connections',
      new TableForeignKey({
        name: 'connections_To_users',
        columnNames: ['user_id'],

        referencedTableName: 'users',
        referencedColumnNames: ['user_id'],

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('connections', 'connections_To_users')
    await queryRunner.dropColumn('connections', 'user_id')
  }
}
