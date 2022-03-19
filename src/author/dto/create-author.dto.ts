import { Book } from 'src/entities/book.entity';
export class CreateAuthorDto {
  FirstName: string;
  LastName: string;
  Books: Book[];
}
