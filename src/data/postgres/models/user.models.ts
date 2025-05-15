import { BaseEntity } from 'typeorm';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    length: 150,
  })
  name: string;

  @Column('varchar', {
    length: 150,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  password: string;

  @Column('enum', {
    enum: UserRole,
    default: UserRole.USER,
  })
  rol: UserRole;

  @Column('boolean', {
    nullable: false,
    default: true,
  })
  status: boolean;

  /** FECHA ALEATORIA DE CREACIÓN */

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_at: Date;
}
