import { v4 as uuid } from 'uuid'
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import Users from './Users'

@Entity('connections')
export default class Connections {
  @PrimaryColumn('uuid')
  connection_id: string;

  @ManyToOne(() => Users, users => users.conections)
  @JoinColumn({ name: 'user_id' })
  users: Users

  @Column('uuid')
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  connectionsProps (): void {
    this.connection_id = uuid()
  }
}
