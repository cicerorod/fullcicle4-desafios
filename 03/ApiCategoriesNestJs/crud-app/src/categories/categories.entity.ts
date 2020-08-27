import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { property } from '@loopback/repository';
import { v4 as uuid } from 'uuid';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;
}
