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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  usersProps (): void {
    this.user_id = uuid()
  }
}
