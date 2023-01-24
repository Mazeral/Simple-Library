import { IsAlpha, IsAlphanumeric } from "class-validator";

export class AuthorBooks {
  @IsAlpha()
  FirstName: string;
  @IsAlpha()
  LastName: string;
  @IsAlphanumeric('en-US', {
    each: true
  })
  books: string[];
}
