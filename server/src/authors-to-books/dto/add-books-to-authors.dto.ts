import { IsAlpha, IsAlphanumeric } from 'class-validator';

export class addBooksToAuthors {
  @IsAlpha()
  firstname: string;
  @IsAlpha()
  lastname: string;
  @IsAlphanumeric('en-US', {
    each: true,
  })
  books: [];
}
