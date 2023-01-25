import { IsAlpha } from 'class-validator';

export class DeleteAuthor {
  @IsAlpha()
  FirstName: string;
  @IsAlpha()
  LastName: string;
}
