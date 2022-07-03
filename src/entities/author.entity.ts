import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Book } from '../entities/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @ManyToMany(() => Book, { eager: true })
  @JoinTable()
  Books: Book[];
  //In order to create an object using the book entity I need to define constructors.
  constructor(FirstName: string, LastName: string, Books: Book[]);
  constructor(FirstName: string, LastName: string, Books: Book[], id?: number) {
    this.FirstName = FirstName || '';
    this.LastName = LastName || '';
    this.Books = Books || null;
    this.id = id || null;
  }
}
