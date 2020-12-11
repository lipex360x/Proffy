import { v4 as uuid } from 'uuid'
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm'
import Users from '@modules/users/infra/typeorm/entities/Users'
import Classe from './Classe'
import Class_Schedule from './Class_Schedule'

@Entity('class_teachers')
export default class Class_Teacher {
  @PrimaryColumn('uuid')
  class_teacher_id: string;

  @Column('decimal', { scale: 2 })
  cost: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Users, user => user.class_teacher)
  @JoinColumn({ name: 'user_id' })
  user: Users

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => Classe, classe => classe.class_teacher)
  @JoinColumn({ name: 'class_id' })
  classe: Classe

  @Column('uuid')
  class_id: string;

  @OneToMany(() => Class_Schedule, class_schedule => class_schedule.class_teacher, {})
  class_schedule: Class_Schedule[]

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  class_teacherProps (): void {
    this.class_teacher_id = uuid()
  }
}
