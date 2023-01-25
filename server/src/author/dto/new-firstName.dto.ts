import { IsAlpha } from 'class-validator';
export class NewFirstName {
  @IsAlpha()
  FirstName: string;
  @IsAlpha()
  LastName: string;
  @IsAlpha()
  NewFirstName: string;
}
