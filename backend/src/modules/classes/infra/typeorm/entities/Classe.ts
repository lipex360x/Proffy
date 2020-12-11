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
import Class_Teacher from './Class_Teacher'

@Entity('classes')
export default class Classe {
  @PrimaryColumn('uuid')
  class_id: string;

  @Column()
  subject: string;

  @OneToMany(() => Class_Teacher, class_teacher => class_teacher.classe, {})
  class_teacher: Class_Teacher[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  classeProps (): void {
    this.class_id = uuid()
  }
}
