import { IsAlphanumeric } from 'class-validator';

export class UpdateBookTitle {
  @IsAlphanumeric()
  title: string;
  @IsAlphanumeric()
  newTitle: string;
}
