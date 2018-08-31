import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ nullable: true})
  filename: string;

  @Column({ nullable: true, type: 'int' })
  views: number;

  @Column({ nullable: true})
  isPublished: boolean;
}