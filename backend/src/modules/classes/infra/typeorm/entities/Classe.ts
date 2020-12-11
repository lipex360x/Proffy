import { v4 as uuid } from 'uuid'
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm'

@Entity('classes')
export default class Classe {
  @PrimaryColumn('uuid')
  class_id: string;

  @Column()
  subject: string;

  @Column({ precision: 2 })
  cost: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  classeProps (): void {
    this.class_id = uuid()
  }
}
