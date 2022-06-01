import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
  //There should be an array of authors here...

  //In order to create an object using the book entity I need to define constructors.

  constructor(title: string, description: string);
  constructor(title: string, description?: string);
  constructor(title?: string, description?: string) {
    this.title = title || '';
    this.description = description || '';
  }
}
