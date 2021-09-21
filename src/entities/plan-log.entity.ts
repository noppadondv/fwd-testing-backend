import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('plan_log')
export class PlanLogEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'gender',
    type: 'enum',
    enum: ['MALE', 'FEMALE'],
  })
  Gender: string;

  @Column({
    name: 'plan_id',
    type: 'varchar',
    length: 20,
  })
  PlanId: string;

  @Column({
    name: 'premium',
    type: 'int',
    precision: 12,
  })
  Premium: number;

  @Column({
    name: 'dob',
    type: 'varchar',
    length: 50,
  })
  Dob: string;

  @Column({
    name: 'sa_peryear',
    type: 'int',
    precision: 12,
    nullable: true,
  })
  saPerYear: number;

  @Column({
    name: 'result',
    type: 'json',
  })
  Result: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;
}
