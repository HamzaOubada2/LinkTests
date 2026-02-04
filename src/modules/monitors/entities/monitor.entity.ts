import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('monitors')
export class Monitor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  url: string;
  @Column({ default: 60 })
  frequency: number; // How many checks per second
  @Column({ default: true })
  isActive: boolean; // Monitor status
  @CreateDateColumn()
  createdAt: Date;
}
