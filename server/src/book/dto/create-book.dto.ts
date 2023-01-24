import { IsAlphanumeric } from "class-validator";

export class CreateBookDto {
  @IsAlphanumeric()
  title: string;
  @IsAlphanumeric()
  description: string;
}
