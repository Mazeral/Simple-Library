import { Book } from 'src/entities/book.entity';

export class AuthorBooks {
  FirstName: string;
  LastName: string;
  books: Book[];
}
