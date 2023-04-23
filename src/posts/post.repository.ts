import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Destination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;
}
