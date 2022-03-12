import { Book } from 'src/entities/book.entity';
export class CreateAuthorDto {
  id: number;
  FirstName: string;
  LastName: string;
  Books: Book[];
}
