import { v4 as uuid } from 'uuid'
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany
} from 'typeorm'
import Connections from './Connections'
import Class_Teacher from '@modules/classes/infra/typeorm/entities/Class_Teacher'

@Entity('users')
export default class Users {
  @PrimaryColumn('uuid')
  user_id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  whatsapp: string;

  @Column()
  email: string;

  @Column()
  bio: string;

  @OneToMany(() => Connections, conections => conections.users, {})
  conections: Connections[]

  @OneToMany(() => Class_Teacher, class_teacher => class_teacher.user, {})
  class_teacher: Class_Teacher[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  usersProps (): void {
    this.user_id = uuid()
  }
}
