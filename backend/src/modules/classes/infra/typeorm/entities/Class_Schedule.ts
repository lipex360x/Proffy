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
import Class_Teacher from './Class_Teacher'

@Entity('class_schedules')
export default class Class_Schedule {
  @PrimaryColumn('uuid')
  class_schedule_id: string;

  @Column()
  week_day: number;

  @Column()
  start_schedule: number;

  @Column()
  end_schedule: number;

  @ManyToOne(() => Class_Teacher, class_teacher => class_teacher.class_schedule)
  @JoinColumn({ name: 'class_teacher_id' })
  class_teacher: Class_Teacher

  @Column('uuid')
  class_teacher_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  class_scheduleProps (): void {
    this.class_schedule_id = uuid()
  }
}
