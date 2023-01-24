import { IsAlpha } from "class-validator";

export class CreateAuthorDto {
  @IsAlpha()
  FirstName: string;
  @IsAlpha()
  LastName: string;
  Books?: any;
}
