import { IsAlpha } from 'class-validator';

export class seachAuthor {
  @IsAlpha()
  firstName: string;
  @IsAlpha()
  lastName: string;
}
