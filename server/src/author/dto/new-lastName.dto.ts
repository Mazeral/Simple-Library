import { IsAlpha } from "class-validator";
export class NewLastName {
  @IsAlpha()

  FirstName: string;
  @IsAlpha()

  LastName: string;
  @IsAlpha()

  NewLastName: string;
}
