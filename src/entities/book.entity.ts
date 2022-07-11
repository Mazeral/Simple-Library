import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Author } from './author.entity';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
  //There should be an array of authors here...
  @ManyToMany(() => Author, (author) => author.Books) //(author) => author.Books is to be able to refer to the related books from the the entity.
  authors: Author[];
  //In order to create an object using the book entity I need to define constructors.

  constructor(title: string, description: string);
  constructor(title: string, description?: string);
  constructor(title?: string, description?: string) {
    this.title = title || '';
    this.description = description || '';
  }
}
